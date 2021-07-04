import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Wrapper, WrapAside, WrapMain } from './index.style'
import MoneySummary from './money-detail'
import CryptoDetail from './crypto-detail'
import CashFlow from './cash-flow'
import { getAssetsBalance, getAssetsWallet } from '@/api/assets'
import { cryptoData } from '@/api/quote'

const Member = () => {
  const [balance, setBalance] = useState(0)
  const [wallet, setWallet] = useState(0)
  const total = useMemo(() => balance + wallet, [balance, wallet])

  const handleUpdate = async () => {
    const result = await Promise.all([getAssetsBalance(), getAssetsWallet()])
    if (typeof result[0].result === 'number') setBalance(result[0].result)
    if (result[1].error === false) setWallet(calcWallet(result[1].result as WalletDetail[]))
  }

  const calcWallet = (list: WalletDetail[]) => list.reduce((acc, curr) => {
    return cryptoData[curr.name + 'USDT'] ? acc + Number(cryptoData[curr.name + 'USDT'].close) * curr.amount : acc
  }, 0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (Object.keys(cryptoData).length) {
        handleUpdate()
        clearInterval(timer)
      }
    }, 500)
  }, [])

  return (
    <Wrapper>
      <WrapAside>
        <MoneySummary
          total={total}
          balance={balance}
          wallet={wallet}
          update={handleUpdate}
        />
        <br />
      </WrapAside>

      <WrapMain>
        <CryptoDetail />
        <br />
        <CashFlow />
      </WrapMain>
    </Wrapper>
  )
}

export default Member
import React, { useEffect, useState } from 'react'
import { Wrapper, WrapAside, WrapMain } from './index.style'
import MoneySummary from './money-detail'
import CryptoDetail from './crypto-detail'
import CashFlow from './cash-flow'
import { getAssetsBalance } from '@/api/assets'

const Member = () => {
  const [balance, setBalance] = useState(0)
  const getBalance = async () => {
    const result = await getAssetsBalance()
    if (result.error === false) setBalance(result.result as number)
  }

  useEffect(() => {
    getBalance()
  }, [])

  return (
    <Wrapper>
      <WrapAside>
        <MoneySummary />
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
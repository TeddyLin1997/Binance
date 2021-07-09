import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { setBalance } from 'action/balance'
import { getAssetsBalance, getAssetsWallet } from '@/api/assets'
import { Wrapper, WrapAside, WrapMain } from './index.style'
import { cryptoData } from '@/api/quote'
import MoneySummary from './money-detail'
import CryptoDetail from './wallet-detail'
import CashFlow from './cash-flow'
import useBinance from '@/hooks/useBinance'

const Member = () => {
  const balance = useSelector((state: RootState) => state.balance)
  const [wallet, setWallet] = useState<WalletDetail[]>([])
  useEffect(() => {
    getWalletList()
  }, [])

  async function getWalletList () {
    const result = await getAssetsWallet()
    if (typeof result.result !== 'string') setWallet(result.result)
  }

  const binance = useBinance(false)
  const walletValue = useMemo(() => calcWallet(wallet), [wallet, binance])
  function calcWallet (list: WalletDetail[]) {
    return list.reduce((acc, curr) => acc + Number(binance.find(node => node.name === curr.name)?.close ?? 0) * curr.amount, 0)
  }

  const total = useMemo(() => balance + walletValue, [balance, walletValue])

  useEffect(() => { handleUpdate() }, [])

  async function handleUpdate () {
    const allResult = await Promise.all([
      getAssetsBalance(),
      getAssetsWallet(),
    ])

    if (typeof allResult[0].result !== 'string') setBalance(allResult[0].result)
    if (typeof allResult[1].result !== 'string') setWallet(allResult[1].result)
  }

  return (
    <Wrapper>
      <WrapAside>
        <MoneySummary
          total={total}
          balance={balance}
          wallet={walletValue}
        />
        <br />
      </WrapAside>

      <WrapMain>
        <CryptoDetail list={wallet} />
        <br />
        <CashFlow />
      </WrapMain>
    </Wrapper>
  )
}

export default Member
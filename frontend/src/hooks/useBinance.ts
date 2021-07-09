import { useEffect, useState } from 'react'
import { cryptoData, namelist } from '@/api/quote'

const useBinance = (isHome: boolean) => {
  const list = namelist.slice(0, isHome ? 5 : undefined)
  const initList: Crypto[] = list.map(item => ({
    name: item,
    ...cryptoData[item + 'USDT'],
  }))

  const [binance, setBinance] = useState(initList)

  useEffect(() => {
    const timerId = setInterval(() => {
      setBinance(list.map(item => ({ name: item, ...cryptoData[item + 'USDT'] })))
    }, 1500);

    return () => clearInterval(timerId)
  }, [])

  return binance
}

export default useBinance
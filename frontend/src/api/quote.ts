import { cryptoData } from './index'

export const getCryptoHomeService = (): Crypto[] => {
  return [
    { name: 'BTC', ...cryptoData['BTCUSDT'] },
    { name: 'ETH', ...cryptoData['ETHUSDT'] },
    { name: 'BNB', ...cryptoData['BNBUSDT'] },
    { name: 'ADA', ...cryptoData['ADAUSDT'] },
    { name: 'DOGE', ...cryptoData['DOGEUSDT'] },
  ]
}

export const updateCryptoHomeService = () => {
  const result = {
    BTC: cryptoData['BTCUSDT'],
    ETH: cryptoData['ETHUSDT'],
    BNB: cryptoData['BNBUSDT'],
    ADA: cryptoData['ADAUSDT'],
    DOGE: cryptoData['DOGEUSDT'],
  }

  Object.keys(result).forEach((key) => {
    type Key = keyof typeof result
    let item = result[key as Key]
    if (item) item.changePercent = (Number(item.close) - Number(item.open)) * 100 / Number(item.open)
  })

  return result
}

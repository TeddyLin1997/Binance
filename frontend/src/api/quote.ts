import { cryptoData } from './index'

export const getCryptoHomeService = (): Crypto[] => {
  return [
    { name: 'BTC', ...cryptoData['BTCUSDT'] },
    { name: 'ETH', ...cryptoData['ETHUSDT'] },
    { name: 'BNB', ...cryptoData['BNBUSDT'] },
    { name: 'ADA', ...cryptoData['ADAUSDT'] },
    { name: 'DOGE', ...cryptoData['DOGEUSDT'] },
  ].map(item => ({ ...item, changePercent: (Number(item.close) - Number(item.open)) * 100 / Number(item.open) }))
}
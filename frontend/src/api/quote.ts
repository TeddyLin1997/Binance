import { cryptoData } from './index'

export const getHomeListService = (): Crypto[] => ([
  { name: 'BTC', ...cryptoData['BTCUSDT'] },
  { name: 'ETH', ...cryptoData['ETHUSDT'] },
  { name: 'BNB', ...cryptoData['BNBUSDT'] },
  { name: 'ADA', ...cryptoData['ADAUSDT'] },
  { name: 'DOGE', ...cryptoData['DOGEUSDT'] },
].map(item => ({ 
  ...item,
  changePercent: (Number(item.close) - Number(item.open)) * 100 / Number(item.open),
})))

export const updateHomeListService = () => {
  const mapping = {
    BTC: cryptoData['BTCUSDT'],
    ETH: cryptoData['ETHUSDT'],
    BNB: cryptoData['BNBUSDT'],
    ADA: cryptoData['ADAUSDT'],
    DOGE: cryptoData['DOGEUSDT'],
  }

  Object.keys(mapping).forEach((key) => {
    type Key = keyof typeof mapping
    let item = mapping[key as Key]
    if (item) item.changePercent = (Number(item.close) - Number(item.open)) * 100 / Number(item.open)
  })

  return mapping
}

export const getCryptoListService = () => ([
  { name: 'BTC', ...cryptoData['BTCUSDT'] },
  { name: 'ETH', ...cryptoData['ETHUSDT'] },
  { name: 'BNB', ...cryptoData['BNBUSDT'] },
  { name: 'ADA', ...cryptoData['ADAUSDT'] },
  { name: 'DOGE', ...cryptoData['DOGEUSDT'] },
  { name: 'XRP', ...cryptoData['XRPUSDT'] },
  { name: 'TRX', ...cryptoData['TRXUSDT'] },
  { name: 'LTC', ...cryptoData['LTCUSDT'] },
  { name: 'DOT', ...cryptoData['DOTUSDT'] },
  { name: 'UNI', ...cryptoData['UNIUSDT'] },
  { name: 'BCH', ...cryptoData['BCHUSDT'] },
  { name: 'SOL', ...cryptoData['SOLUSDT'] },
  { name: 'LINK', ...cryptoData['LINKUSDT'] },
  { name: 'MATIC', ...cryptoData['MATICUSDT'] },
  { name: 'XLM', ...cryptoData['XLMUSDT'] },
  { name: 'ICP', ...cryptoData['ICPUSDT'] },
  { name: 'VET', ...cryptoData['VETUSDT'] },
  { name: 'ETC', ...cryptoData['ETCUSDT'] },
  { name: 'FIL', ...cryptoData['FILUSDT'] },
  { name: 'XMR', ...cryptoData['XMRUSDT'] },
  { name: 'EOS', ...cryptoData['EOSUSDT'] },
  { name: 'AAVE', ...cryptoData['AAVEUSDT'] },
  { name: 'NEO', ...cryptoData['NEOUSDT'] },
  { name: 'ALGO', ...cryptoData['ALGOUSDT'] },
  { name: 'KSM', ...cryptoData['KSMUSDT'] },
  { name: 'DASH', ...cryptoData['DASHUSDT'] },
  { name: 'THETA', ...cryptoData['THETAUSDT'] },
  { name: 'ATOM', ...cryptoData['ATOMUSDT'] },
].map(item => ({ 
  ...item,
  changePercent: (Number(item.close) - Number(item.open)) * 100 / Number(item.open),
})))

export const updateCryptoListService = () => {
  const mapping: typeof cryptoData = {}

  Object.keys(cryptoData).forEach(key => {
    const re = /(.*)USDT$/
    if (re.test(key)) {
      const rename = key.replace(re, '$1')
      mapping[rename] = {
        ...cryptoData[key],
        changePercent: (Number(cryptoData[key].close) - Number(cryptoData[key].open)) * 100 / Number(cryptoData[key].open)
      }
    }
  })

  return mapping
}
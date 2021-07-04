export let cryptoData: { [props: string]: Omit<Crypto, 'name'> } = {}

const list = [
  'BTCUSDT',
  'ETHUSDT',
  'BNBUSDT',
  'ADAUSDT',
  'DOGEUSDT',
  'XRPUSDT',
  'TRXUSDT',
  'LTCUSDT',
  'DOTUSDT',
  'UNIUSDT',
  'SOLUSDT',
  'LINKUSDT',
  'MATICUSDT',
  'XLMUSDT',
  'ICPUSDT',
  'VETUSDT',
  'ETCUSDT',
  'FILUSDT',
  'XMRUSDT',
  'EOSUSDT',
  'AAVEUSDT',
  'NEOUSDT',
  'ALGOUSDT',
  'KSMUSDT',
  'DASHUSDT',
  'THETAUSDT',
  'ATOMUSDT',
]

export const createWebSocket = (security: string, host: string) => {
  const webSocket = new WebSocket(`ws${security}://${host}`)

  webSocket.onmessage = event => {
    const data = JSON.parse(event.data)

    list.forEach(key => {
      const item = data[key]
      if (item) cryptoData[key] = {
        ...item,
        changePercent: (Number(item.close) - Number(item.open)) * 100 / Number(item.open),
      }
    })
  }
}

export const getHomeListService = (): Crypto[] => ([
  { name: 'BTC', ...cryptoData['BTCUSDT'] },
  { name: 'ETH', ...cryptoData['ETHUSDT'] },
  { name: 'BNB', ...cryptoData['BNBUSDT'] },
  { name: 'ADA', ...cryptoData['ADAUSDT'] },
  { name: 'DOGE', ...cryptoData['DOGEUSDT'] },
])

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
])
export let cryptoData: { [props: string]: Omit<Crypto, 'name'> } = {}

export const namelist = [
  'BTC',
  'ETH',
  'BNB',
  'ADA',
  'DOGE',
  'XRP',
  'TRX',
  'LTC',
  'DOT',
  'UNI',
  'SOL',
  'LINK',
  'MATIC',
  'XLM',
  'ICP',
  'VET',
  'ETC',
  'FIL',
  'XMR',
  'EOS',
  'AAVE',
  'NEO',
  'ALGO',
  'KSM',
  'DASH',
  'THETA',
  'ATOM',
]

export const createWebSocket = (security: string, host: string) => {
  const webSocket = new WebSocket(`ws${security}://${host}`)

  webSocket.onmessage = event => {
    const data = JSON.parse(event.data)

    namelist.forEach(key => {
      const item = data[key + 'USDT']
      if (item) cryptoData[key + 'USDT'] = {
        ...item,
        changePercent: (Number(item.close) - Number(item.open)) * 100 / Number(item.open),
      }
    })
  }
}
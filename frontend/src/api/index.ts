import axios, { AxiosPromise } from 'axios'

const HOST = document.location.host
const PORT = document.location.port

const instance = axios.create({
  baseURL: `http://${HOST}`,
  method: 'post',
})

let crypto: { [props: string]: Omit<Crypto, 'name'> } = {}

const webSocket = new WebSocket(`ws://${PORT === '3000' ? 'localhost:8000' : HOST}`)

// get message
webSocket.onmessage = event => {
  crypto = JSON.parse(event.data)
}

export const getCryptoHomeService = (): Crypto[] => {
  return [
    { name: 'BTC', ...crypto['BTCUSDT'] },
    { name: 'ETH', ...crypto['ETHUSDT'] },
    { name: 'BNB', ...crypto['BNBUSDT'] },
    { name: 'ADA', ...crypto['ADAUSDT'] },
    { name: 'DOGE', ...crypto['DOGEUSDT'] },
  ].map(item => ({ ...item, changePercent: (Number(item.close) - Number(item.open)) * 100 / Number(item.open) }))
}

// export const getCryptoService = async (limit: number): Promise<{ label: string, value: string }[]> => {
//   return await instance({
//     url: '/quote/crypto',
//     data: { limit },
//   }).then(res => res.data.result)
// }


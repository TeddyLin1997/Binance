import axios from 'axios'

const PORT = '8000'
const DOMAIN = document.domain
const HOST = import.meta.env.DEV ? `${DOMAIN}:${PORT}` : document.location.host
const SECURITY = import.meta.env.DEV ? '' : 's'

export const axiosInstance = axios.create({
  baseURL: `http${SECURITY}://${HOST}`,
  method: 'get',
  headers: { Authorization: 'Bearer ' },
})

export const setAxiosAuth = (token: string) => {
  axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
}

export const defaultFormat = {
  error: true,
  result: '未知錯誤',
  status: 0,
}

export const webSocket = new WebSocket(`ws${SECURITY}://${HOST}`)

export let cryptoData: { [props: string]: Omit<Crypto, 'name'> } = {}

webSocket.onmessage = event => {
  cryptoData = JSON.parse(event.data)
}
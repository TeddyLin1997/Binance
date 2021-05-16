import axios, { AxiosPromise } from 'axios'

const API_URL = 'http://localhost:8000'
// const API_URL = document.domain + ':3000'

const instance = axios.create({
  baseURL: API_URL,
  method: 'post',
})

export const getCryptoService = async (limit: number): Promise<{ label: string, value: string }[]> => {
  return await instance({
    url: '/quote/crypto',
    data: { limit },
  }).then(res => res.data.result)
}
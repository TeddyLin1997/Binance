import { axiosInstance } from './index'

export const tradeBuyService = async (data: BuyForm): Promise<ApiResponse<boolean>> => {
  return axiosInstance({
    url: '/trade/buy',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const tradeSellService = async (data: SellForm): Promise<ApiResponse<boolean>> => {
  return axiosInstance({
    url: '/trade/sell',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(err => err.response.data)
}
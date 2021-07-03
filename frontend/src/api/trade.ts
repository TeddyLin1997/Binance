import { axiosInstance, defaultFormat } from './index'

export const tradeBuyService = async (data: TradeForm): Promise<ApiResponse<boolean>> => {
  return await axiosInstance({
    url: '/trade/buy',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}

export const tradeSellService = async (data: TradeForm): Promise<ApiResponse<boolean>> => {
  return await axiosInstance({
    url: '/trade/sell',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}
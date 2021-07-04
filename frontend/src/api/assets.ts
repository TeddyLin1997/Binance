import { axiosInstance, defaultFormat } from './index'

export const getAssetsBalance = async (): Promise<ApiResponse<number>> => {
  return await axiosInstance({
    url: '/assets/balance',
    method: 'post',
  })
    .then(res => res.data)
    .catch(() => ({
      error: false,
      result: 100000,
    }))
}

export const getAssetsWallet = async (): Promise<ApiResponse<WalletDetail[]>> => {
  return await axiosInstance({
    url: '/assets/wallet',
    method: 'post',
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}

export const getAssetsCashFlow = async () => {
  return await axiosInstance({
    url: '/assets/cash-flow',
    method: 'post',
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}
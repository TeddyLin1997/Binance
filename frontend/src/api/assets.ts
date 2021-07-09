import { axiosInstance } from './index'

export const getAssetsBalance = async (): Promise<ApiResponse<number>> => {
  return axiosInstance({
    url: '/assets/balance',
    method: 'post',
  })
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const getAssetsWallet = async (): Promise<ApiResponse<WalletDetail[]>> => {
  return axiosInstance({
    url: '/assets/wallet',
    method: 'post',
  })
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const getAssetsCashFlow = async (): Promise<ApiResponse<CashFlowDetail[]>> => {
  return axiosInstance({
    url: '/assets/cash-flow',
    method: 'post',
  })
    .then(res => res.data)
    .catch(err => err.response.data)
}
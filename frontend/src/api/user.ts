import { axiosInstance } from './index'

export const signUpService = async (data: UserForm): Promise<ApiResponse<boolean>> => {
  return axiosInstance({
    url: '/user/sign-up',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const signInService = async (data: Omit<UserForm, 'email'>): Promise<ApiResponse<string>> => {
  return axiosInstance({
    url: '/user/sign-in',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const getUserInfoService = async (): Promise<ApiResponse<Omit<UserInfo, 'token'>>> => {
  return axiosInstance({
    url: '/user/info',
    method: 'post',
  })
    .then(res => res.data)
    .catch(err => err.response.data)
}

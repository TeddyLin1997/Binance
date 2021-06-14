import { axiosInstance, defaultFormat } from './index'

export const signUpService = async (data: UserForm): Promise<ApiResponse<boolean>> => {
  return await axiosInstance({
    url: '/user/sign-up',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}

export const signInService = async (data: Omit<UserForm, 'email'>): Promise<ApiResponse<string>> => {
  return await axiosInstance({
    url: '/user/sign-in',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}

export const getUserInfoService = async (token: string) => {
  return await axiosInstance({
    url: '/user/info',
    method: 'post',
    data: { token },
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}

import { AxiosInstance, defaultFormat } from './index'

export const SignUpService = async (data: User): Promise<ApiResponse<boolean>> => {
  return await AxiosInstance({
    url: '/user/sign-up',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}

type SignIn = {
  id: string;
  account: string;
  token: string;
}

export const SignInService = async (data: Omit<User, 'email'>): Promise<ApiResponse<SignIn>> => {
  return await AxiosInstance({
    url: '/user/sign-in',
    method: 'post',
    data,
  })
    .then(res => res.data)
    .catch(() => defaultFormat)
}

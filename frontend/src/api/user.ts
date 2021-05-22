import { AxiosInstance } from './index'
// import { AxiosPromise } from 'axios'

export const createUserService = async (data: User): Promise<{ status: boolean }> => {
  return await AxiosInstance({
    url: '/user/sign-up',
    data,
  }).then(res => res.data.result)
}
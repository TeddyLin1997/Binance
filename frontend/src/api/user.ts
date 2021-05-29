import { AxiosInstance } from './index'

type SignUp = {
  error: boolean;
  result: string;
  status: number;
}

export const createUserService = async (data: User): Promise<SignUp> => {
  return await AxiosInstance({
    url: '/user/sign-up',
    data,
  }).then(res => res.data)
}

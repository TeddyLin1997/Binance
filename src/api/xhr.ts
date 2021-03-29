import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const mock = new MockAdapter(axios)

export const xhr = <T>(options: {
  url: string;
  method: 'get';
  defaultData: T;
}): Promise<T> =>  {
	return axios({
		...options,
	})
		.then(res => res.data)
		.catch(() => options.defaultData)
}

export const getRandom = (min: number, max: number): number => {
	return Math.floor(Math.random()*(max - min + 1)) + min
}
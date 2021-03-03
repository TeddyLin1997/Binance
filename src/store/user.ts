import { Reducer } from 'react'

type User = {
  isLogin: boolean,
  name: string,
  id: string,
  assets: number,
}

type UserPayload = {
  isLogin?: boolean,
  name?: string,
  id?: string,
  assets?: number,
}

const initUser = {
	isLogin: false,
	name: '',
	id: '',
	assets: 0
}

export const userReducer: Reducer<User, UserPayload> = (state = initUser, payload ) => {
	return state = Object.assign( {}, state, payload )
}
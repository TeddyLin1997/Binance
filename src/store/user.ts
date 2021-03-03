import { Reducer } from 'react'

type User = {
  isLogin: boolean,
  name: string,
  id: string,
  assets: number,
}

type Action = {
  type: string,
  user: {
    isLogin?: boolean,
    name?: string,
    id?: string,
    assets?: number,
  }
}

const initUser = {
	isLogin: false,
	name: '',
	id: '',
	assets: 0
}

export const userReducer: Reducer<User, Action> = (state = initUser, action ) => {
	return state = Object.assign( {}, state, action.user )
}
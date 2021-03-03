import { Reducer } from 'react'
import * as actionType from './actionTypes'

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
	if (action.type === actionType.USER_UPDATE) return state = Object.assign( {}, state, action.user )
	else return state
}


const initVisitList:string[] = []

export const visitReducer: Reducer<string[], { type: string, value: string }> = (state = initVisitList, action ) => {
	const result = state.slice()

	switch (action.type) {
	case actionType.VISIT_ADD:
		result.push(action.value)
		return result
	case actionType.VISIT_DELETE:
		return result.indexOf(action.value) === -1 ? result : result.splice(result.indexOf(action.value), 1)
	default:
		return state
	}
}

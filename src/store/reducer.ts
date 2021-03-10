import { Reducer } from 'react'
import * as actionType from './actionTypes'

interface Action<T> {
	type: string;
	value: T;
}

// user store
interface User {
  isLogin: boolean;
  uid: string;
}

const initUser: User = {
	isLogin: false,
	uid: '',
}

export const userReducer: Reducer<User, Action<Partial<User>>> = (state = initUser, action ) => {
	if (action.type === actionType.USER_UPDATE) return Object.assign( {}, state, action.value )
	else return state
}

// visit store
const initVisitList:string[] = []

export const visitReducer: Reducer<string[], Action<string>> = (state = initVisitList, action ) => {
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

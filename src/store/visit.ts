import { Reducer } from 'react'

type VisitList = string[]

type Action = {
  type: string,
  value: string,
}

const initVisitList:VisitList = []

export const visitReducer: Reducer<VisitList, Action> = (state = initVisitList, action ) => {
	const result = state.slice()

	switch (action.type) {
	case 'add_visit':
		result.push(action.value)
		return result
	case 'delete_visit':
		return result.indexOf(action.value) === -1 ? result : result.splice(result.indexOf(action.value), 1)
	default:
		return state
	}
}

export default visitReducer

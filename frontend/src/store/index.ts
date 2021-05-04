import { createStore, combineReducers } from 'redux'
import {
	userReducer,
	visitReducer,
} from './reducer'

const rootReducer = combineReducers({
	user: userReducer,
	visitList: visitReducer,
})

const store = createStore(rootReducer)

export default store

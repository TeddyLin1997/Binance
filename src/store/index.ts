import { createStore, combineReducers } from 'redux'
import userReducer from './user'
import visitReducer from './visit'

const rootReducer = combineReducers({
	user: userReducer,
	visitList: visitReducer,
})

const store = createStore(rootReducer)

export default store

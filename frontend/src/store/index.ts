import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slice/user'
import balanceReducer from './slice/balance'

const rootReducer = combineReducers({
  user: userReducer,
  balance: balanceReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
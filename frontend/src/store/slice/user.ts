import { createSlice } from '@reduxjs/toolkit'
import { setAxiosAuth } from '@/api'

const LOCAL_STORAGE_NAME = 'token'
const SESSION_STORAGE_NAME = 'user'

const defaultUserInfo = {
  id: 0,
  account: '',
  token: ''
}

type User = typeof defaultUserInfo
type UserInfo = Omit<typeof defaultUserInfo, 'token'>
type Token = string

const token: Token = localStorage.getItem(LOCAL_STORAGE_NAME) || defaultUserInfo.token
const user: UserInfo = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_NAME) as string) || {
  id: defaultUserInfo.id,
  account: defaultUserInfo.account,
}

const initialState: User = {
  ...user,
  token: token,
}

if (token) setAxiosAuth(token)

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setToken: (state, action: { payload: Token, type: string }) => {
      state.token = action.payload
      setAxiosAuth(action.payload)

      localStorage.setItem(LOCAL_STORAGE_NAME, action.payload)
    },

    setUserInfo: (state, action: { payload: UserInfo, type: string }) => {
      state.id = action.payload.id
      state.account = action.payload.account

      const user = {
        id: action.payload.id,
        account: action.payload.account,
      }
      sessionStorage.setItem(SESSION_STORAGE_NAME, JSON.stringify(user))
    },

    clearUser: (state) => {
      state.id = defaultUserInfo.id
      state.account = defaultUserInfo.account
      state.token = defaultUserInfo.token

      localStorage.removeItem(LOCAL_STORAGE_NAME)
      sessionStorage.removeItem(SESSION_STORAGE_NAME)
    }
  }
})

export const { setToken, setUserInfo, clearUser } = userSlice.actions
export default userSlice.reducer
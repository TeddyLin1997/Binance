import { createSlice } from '@reduxjs/toolkit'
import { setAxiosAuth } from '@/api'

const LOCAL_STORAGE_NAME = 'user'

const initialState: UserInfo =  {
  id: 0,
  account: '',
  token: '',
}

const localUser = localStorage.getItem(LOCAL_STORAGE_NAME)
const userInfo: UserInfo = localUser ? JSON.parse(localUser) : initialState

if (userInfo.token) setAxiosAuth(userInfo.token)

const userSlice = createSlice({
  name: 'user',
  initialState: userInfo,
  reducers: {
    setUser: (state, action) => {
      state = action.payload || initialState
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state))
      setAxiosAuth(state.token)
    },
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
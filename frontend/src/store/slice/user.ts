import { createSlice } from '@reduxjs/toolkit'
import { setAxiosAuth } from '@/api'

const LOCAL_STORAGE_NAME = 'user'

const initialState: UserInfo =  {
  id: 0,
  account: '',
  token: '',
}

const localInfo = localStorage.getItem(LOCAL_STORAGE_NAME)
const userInfo: UserInfo = localInfo ? JSON.parse(localInfo) : initialState

if (userInfo.token) setAxiosAuth(userInfo.token)

const userSlice = createSlice({
  name: 'user',
  initialState: userInfo,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id || initialState.id
      state.account = action.payload.account || initialState.account
      state.token = action.payload.token || initialState.token

      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state))
      setAxiosAuth(state.token)
    },
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import { REFRESH_TOKEN, TOKEN } from "defines/common"
import Cookies from "js-cookie"
import { RootState } from "store"

const initialState = {
  signedIn: false,
  profile: {
    displayName: null,
    studentCode: null,
    gender: null,
    birthday: null,
  },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignIn(state, { payload }) {
      const { profile, token, refreshToken } = payload
      state.signedIn = true
      state.profile = profile
      Cookies.set(TOKEN, token)
      Cookies.set(REFRESH_TOKEN, refreshToken)
    },
    setSignOut(state, { payload }) {
      Cookies.remove(TOKEN)
      Cookies.remove(REFRESH_TOKEN)
    },
  },
})

export const userSelector = (state: RootState) => state.user
export const { setSignIn, setSignOut } = userSlice.actions
export default userSlice.reducer

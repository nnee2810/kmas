import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "store"

const initialState = {
  token: localStorage.getItem("token") || null,
  profile: {
    displayName: null,
    studentCode: null,
    gender: null,
    birthday: null,
  },
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGN_IN(state, { payload }) {
      state.token = payload
      localStorage.setItem("token", payload)
    },
    SIGN_OUT(state, { payload }) {
      state.token = null
      localStorage.removeItem("token")
    },
  },
})

export const userSelector = (state: RootState) => state.user
export const { SIGN_IN, SIGN_OUT } = slice.actions
export default slice.reducer

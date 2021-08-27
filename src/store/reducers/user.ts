import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: null,
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
      console.log(payload)
    },
  },
})

export const { SIGN_IN } = slice.actions
export default slice.reducer

import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    profile: {
      fullName: "",
      studentCode: "",
    },
    lessons: [],
  },
  reducers: {
    setLogin(state, { payload }) {
      state.loggedIn = true
      const { profile, lessons } = payload
      state.profile = profile
      state.lessons = lessons
      localStorage.setItem("profile", JSON.stringify(profile))
      localStorage.setItem("lessons", JSON.stringify(lessons))
    },
    setLogout(state, { payload }) {
      state.loggedIn = false
      localStorage.clear()
    },
  },
})

export const userSelector = (state: any) => state.user
export const { setLogout, setLogin } = userSlice.actions
export default userSlice.reducer

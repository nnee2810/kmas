import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    profile: {
      fullName: "",
      studentCode: "",
    },
    schedule: [],
  },
  reducers: {
    setLogin(state, { payload }) {
      state.loggedIn = true
      const { profile, schedule } = payload
      state.profile = profile
      state.schedule = schedule
      localStorage.setItem("profile", JSON.stringify(profile))
      localStorage.setItem("schedule", JSON.stringify(schedule))
    },
    setLogout(state, { payload }) {
      state.loggedIn = false
      localStorage.removeItem("profile")
    },
  },
})

export const userSelector = (state: any) => state.user
export const { setLogout, setLogin } = userSlice.actions
export default userSlice.reducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { STORAGE_KEY } from "configs/constants"
import { Student } from "types/Student"

interface SliceState extends Student {
  loggedIn: boolean
}

const initialState: SliceState = {
  loggedIn: false,
  profile: {
    fullName: "",
    studentCode: "",
  },
  lessons: [],
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin(state, { payload: { lessons, profile } }: PayloadAction<Student>) {
      state.loggedIn = true
      state.profile = profile
      state.lessons = lessons
      localStorage.setItem(STORAGE_KEY.PROFILE, JSON.stringify(profile))
      localStorage.setItem(STORAGE_KEY.LESSONS, JSON.stringify(lessons))
    },
    setLogout(state) {
      state.loggedIn = false
      localStorage.clear()
    },
  },
})

export const userSelector = (state: any) => state.user
export const { setLogout, setLogin } = userSlice.actions
export default userSlice.reducer

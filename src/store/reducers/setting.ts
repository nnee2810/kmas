import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "store"

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    theme: localStorage.getItem("theme") || "light",
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload
      localStorage.setItem("theme", payload)
    },
  },
})

export const settingSelector = (state: RootState) => state.setting
export const { setTheme } = settingSlice.actions
export default settingSlice.reducer

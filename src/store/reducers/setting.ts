import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "store"

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    lang: localStorage.getItem("lang") || "vi",
    theme: localStorage.getItem("theme") || "light",
  },
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload
    },
    setTheme: (state, { payload }) => {
      state.theme = payload
    },
  },
})

export const settingSelector = (state: RootState) => state.setting
export const { setLang, setTheme } = settingSlice.actions
export default settingSlice.reducer

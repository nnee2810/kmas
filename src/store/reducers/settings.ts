import { createSlice } from "@reduxjs/toolkit"

function getTheme() {
  const theme = localStorage.getItem("theme") || "light"
  if (["light", "dark"].includes(theme)) return theme
  return "light"
}

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    theme: getTheme(),
  },
  reducers: {
    toggleTheme(state, { payload }) {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
  },
})

export const settingsSelector = (state: any) => state.settings
export const { toggleTheme } = settingsSlice.actions
export default settingsSlice.reducer

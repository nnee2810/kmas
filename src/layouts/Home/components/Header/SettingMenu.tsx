import { Box, IconButton } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "hooks/useAppStore"
import React from "react"
import { settingsSelector, toggleTheme } from "store/reducers/settings"

export default function SettingMenu() {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(settingsSelector)

  const handleToggleTheme = () => dispatch(toggleTheme(theme))

  return (
    <IconButton
      aria-label="setting"
      icon={theme === "light" ? <Box>🌞</Box> : <Box>🌜</Box>}
      onClick={handleToggleTheme}
    />
  )
}

import { Box, IconButton, useColorMode } from "@chakra-ui/react"
import React from "react"

export default function SettingMenu() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      as="div"
      aria-label="setting"
      icon={colorMode === "light" ? <Box>🌞</Box> : <Box>🌜</Box>}
      onClick={toggleColorMode}
    />
  )
}

import { Flex, HStack, useColorModeValue } from "@chakra-ui/react"
import LogoText from "components/LogoText"
import React from "react"
import AvatarMenu from "./AvatarMenu"
import SettingMenu from "./SettingMenu"

export default function Header() {
  const borderColor = useColorModeValue("gray.100", "gray.700")

  return (
    <>
      <Flex
        gridArea="header"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        borderBottom="1px solid"
        borderColor={borderColor}
      >
        <LogoText />
        <HStack spacing={3}>
          <AvatarMenu />
          <SettingMenu />
        </HStack>
      </Flex>
    </>
  )
}

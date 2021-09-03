import { Flex, HStack } from "@chakra-ui/react"
import LogoText from "components/LogoText"
import React from "react"
import AvatarMenu from "./AvatarMenu"
import SettingMenu from "./SettingMenu"

export default function Header() {
  return (
    <>
      <Flex
        gridArea="header"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        borderBottom="1px solid #f1f1f1"
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

import { Flex, HStack } from "@chakra-ui/react"
import LogoText from "components/LogoText"
import React from "react"
import { colors } from "styles/colors"
import MenuUser from "./MenuUser"

export default function Header() {
  return (
    <Flex
      gridArea="header"
      justifyContent="space-between"
      alignItems="center"
      px="4"
      borderBottom={`1px solid ${colors.lightGray}`}
    >
      <LogoText />
      <HStack spacing="3">
        <MenuUser />
      </HStack>
    </Flex>
  )
}

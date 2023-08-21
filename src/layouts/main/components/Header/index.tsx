import { Flex, HStack, useColorMode } from "@chakra-ui/react"
import clsx from "clsx"
import LogoText from "components/core/LogoText"
import MenuUser from "./MenuUser"

export default function Header() {
  const { colorMode } = useColorMode()

  return (
    <Flex
      gridArea="header"
      justifyContent="space-between"
      alignItems="center"
      px="3"
      className={clsx(
        "border-b border-solid",
        colorMode === "dark" ? "border-b-gray-700" : "border-b-gray-200",
      )}
    >
      <LogoText />
      <HStack spacing="3">
        <MenuUser />
      </HStack>
    </Flex>
  )
}

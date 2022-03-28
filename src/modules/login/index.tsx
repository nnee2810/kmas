import { Button, Center, Stack, useBoolean } from "@chakra-ui/react"
import LogoText from "components/LogoText"
import React from "react"
import Footer from "./components/Footer"
import FormLogin from "./components/FormLogin"
import ModalLoginMethods from "./components/ModalLoginMethods"

export default function Login() {
  const [openLoginMethods, setOpenLoginMethods] = useBoolean()
  return (
    <Center
      bg="linear-gradient(
        45deg,
        rgba(29, 229, 226, 1) 0%,
        rgb(53 231 165) 88%
        )"
      color="black"
      px="4"
    >
      <Stack
        spacing="2"
        bg="white"
        px="6"
        py="12"
        borderRadius="4"
        boxShadow="2xl"
        width={{ base: "100%", sm: "400px" }}
      >
        <LogoText />
        <FormLogin />
        <Button onClick={setOpenLoginMethods.on}>
          Phương thức đăng nhập khác
        </Button>
      </Stack>
      <Footer />
      <ModalLoginMethods
        isOpen={openLoginMethods}
        onClose={setOpenLoginMethods.off}
      />
    </Center>
  )
}

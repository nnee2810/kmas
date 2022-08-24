import { Stack } from "@chakra-ui/react"
import { LogoText } from "components/core"
import { FormSignIn } from "../components"

export default function SignIn() {
  return (
    <Stack
      spacing="2"
      bg="white"
      px="6"
      py="12"
      borderRadius="6"
      boxShadow="2xl"
      width={{ base: "100%", sm: "400px" }}
    >
      <LogoText />
      <FormSignIn />
    </Stack>
  )
}

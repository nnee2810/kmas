import { Button } from "@chakra-ui/react"
import useAuth from "hooks/useAuth"
import React from "react"

export default function HomeLayout() {
  const { signOut } = useAuth()

  return (
    <Button colorScheme="red" onClick={signOut}>
      Sign out
    </Button>
  )
}

import { Center, useColorMode } from "@chakra-ui/react"
import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "store/user"

export default function AuthLayout() {
  const { profile } = useUser()
  const { setColorMode } = useColorMode()

  if (profile) return <Navigate to="/" />

  useEffect(() => {
    setColorMode("light")
  }, [setColorMode])

  return (
    <Center
      h="100vh"
      bg="linear-gradient(
        45deg,
      rgba(29, 229, 226, 1) 0%,
        rgb(53 231 165) 88%
      )"
      color="black"
      px="4"
    >
      <Outlet />
    </Center>
  )
}

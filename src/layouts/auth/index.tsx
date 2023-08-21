import { Center } from "@chakra-ui/react"
import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "store/user"

export default function AuthLayout() {
  const { profile } = useUser()

  if (profile) return <Navigate to="/" />

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

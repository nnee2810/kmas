import { Center } from "@chakra-ui/react"
import { useAppSelector } from "hooks/useAppStore"
import { Navigate, Outlet } from "react-router-dom"
import { userSelector } from "store/reducers/user"

export default function AuthLayout() {
  const { profile } = useAppSelector(userSelector)

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

import { useToast } from "@chakra-ui/react"
import toastConfig from "configs/toast"
import { postLogin, setLogout } from "store/reducers/user"
import { useAppDispatch } from "./useAppStore"

export interface LoginProps {
  username: string
  password: string
}

export default function useAuth() {
  const toast = useToast()
  const dispatch = useAppDispatch()

  const login = ({ username, password }: LoginProps) => dispatch(postLogin({ username, password }))

  const logout = () => {
    toast({
      ...toastConfig,
      title: "Bye bye 👋",
      status: "success",
    })
    dispatch(setLogout({}))
  }

  return { login, logout }
}

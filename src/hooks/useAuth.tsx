import { postLogin, setLogout } from "store/reducers/user"
import { useAppDispatch } from "./useAppStore"

export interface LoginProps {
  username: string
  password: string
}

export default function useAuth() {
  const dispatch = useAppDispatch()

  const login = ({ username, password }: LoginProps) => dispatch(postLogin({ username, password }))
  const logout = () => dispatch(setLogout({}))

  return { login, logout }
}

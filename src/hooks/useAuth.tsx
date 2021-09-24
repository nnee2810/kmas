import { postLogin, setLogout } from "store/reducers/user"
import { useAppDispatch } from "./useAppStore"

export interface LoginProps {
  studentCode: string
  password: string
}

export default function useAuth() {
  const dispatch = useAppDispatch()

  const login = ({ studentCode, password }: LoginProps) =>
    dispatch(postLogin({ studentCode, password }))
  const logout = () => dispatch(setLogout({}))

  return { login, logout }
}

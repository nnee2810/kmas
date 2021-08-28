import API from "configs/network"
import { SignInProps } from "hooks/useAuth"

const postSignIn = async ({ username, password }: SignInProps) =>
  API.post("/signin", { username, password })

export default postSignIn

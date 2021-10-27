import { useMutation } from "react-query"
import postLogin from "services/postLogin"

export default function usePostLogin() {
  return useMutation(
    "postLogin",
    (params: { studentCode: string; password: string }) => postLogin(params)
  )
}

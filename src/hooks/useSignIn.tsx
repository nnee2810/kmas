import { useToast } from "@chakra-ui/react"
import API from "configs/network"
import toastConfig from "configs/toast"
import md5 from "md5"
import { useState } from "react"
import { SIGN_IN } from "store/reducers/user"
import { useAppDispatch } from "./useAppStore"

interface SignInProps {
  username: string
  password: string
}

export default function useSignIn() {
  const [signInLoading, setSignInLoading] = useState(false)
  const toast = useToast()
  const dispatch = useAppDispatch()

  const signIn = async ({ username, password }: SignInProps) => {
    setSignInLoading(true)
    await API.post("/signin", { username, password: md5(password) })
      .then((res) => {
        switch (res.status) {
          case 200: {
            toast({
              ...toastConfig,
              title: "Đăng nhập thành công",
              status: "success",
            })
            const token = res.data.token
            dispatch(SIGN_IN(token))
            break
          }
          case 401: {
            toast({
              ...toastConfig,
              title: "Tài khoản hoặc mật khẩu không chính xác",
              status: "error",
            })
            break
          }
          default:
            break
        }
      })
      .catch((err) => {
        toast({
          ...toastConfig,
          title: "Đã xảy ra lỗi rồi 😵",
          status: "warning",
        })
        console.log(err)
      })
    setSignInLoading(false)
  }

  return { signIn, signInLoading }
}

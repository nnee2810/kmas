import { Box, Button, Spinner, Stack } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import InputField from "components/InputField"
import { useGetLessons } from "features/login/hooks/useGetLessons"
import { useAppDispatch } from "hooks/useAppStore"
import md5 from "md5"
import React, { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai"
import { FiLock } from "react-icons/fi"
import { toast } from "react-toastify"
import { setLogin } from "store/reducers/user"
import * as yup from "yup"

const schema = yup.object().shape({
  studentCode: yup
    .string()
    .required("Mã sinh viên không được để trống")
    .min(6, "Mã sinh viên không hợp lệ")
    .max(10, "Mã sinh viên không hợp lệ"),
  password: yup.string().required("Mật khẩu không được để trống"),
})

export default function LoginForm() {
  const dispatch = useAppDispatch()
  const methods = useForm({ resolver: yupResolver(schema) })
  const { mutate, isLoading } = useGetLessons()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = ({ studentCode, password }: any) => {
    if (isLoading) return
    mutate(
      { studentCode, password: md5(password) },
      {
        onSuccess(data) {
          toast.success("Đăng nhập thành công")
          dispatch(setLogin(data))
        },
        onError(error: any) {
          toast.error("Có lỗi xảy ra")
          console.log(error)
        },
      }
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Stack spacing="3">
          <InputField
            variant="TEXT"
            name="studentCode"
            placeholder="Mã sinh viên"
            leftElement={<AiOutlineUser />}
          />
          <InputField
            variant="TEXT"
            name="password"
            placeholder="Mật khẩu"
            type={showPassword ? "text" : "password"}
            leftElement={<FiLock />}
            rightElement={
              <Box
                cursor="pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </Box>
            }
          />
          <Button colorScheme="green" type="submit" isDisabled={isLoading}>
            {isLoading ? <Spinner size="sm" /> : "Đăng nhập"}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  )
}

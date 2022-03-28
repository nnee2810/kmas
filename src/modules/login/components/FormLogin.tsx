import { Box, Button, Link, Stack, Text, useBoolean } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import Field from "components/Field"
import { useAppDispatch } from "hooks/useAppStore"
import md5 from "md5"
import { useGetLessons } from "modules/login/hooks/useGetLessons"
import React from "react"
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

interface FormValues {
  studentCode: string
  password: string
}

const defaultValues: FormValues = {
  studentCode: "",
  password: "",
}
const schema = yup.object().shape({
  studentCode: yup
    .string()
    .required("Mã sinh viên không được để trống")
    .min(6, "Mã sinh viên không hợp lệ")
    .max(10, "Mã sinh viên không hợp lệ"),
  password: yup.string().required("Mật khẩu không được để trống"),
})
export default function FormLogin() {
  const dispatch = useAppDispatch()
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { mutate, isLoading } = useGetLessons()
  const [showPassword, setShowPassword] = useBoolean(false)

  const handleSubmit = ({ studentCode, password }: FormValues) => {
    if (isLoading) return
    mutate(
      { method: "credential", studentCode, password: md5(password) },
      {
        onSuccess(data) {
          toast.success("Đăng nhập thành công")
          dispatch(setLogin(data))
        },
        onError(error: any) {
          toast.error(error?.response?.data?.message || "Có lỗi xảy ra")
        },
      }
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Stack spacing="3">
          <Field
            variant="TEXT"
            name="studentCode"
            placeholder="Mã sinh viên"
            icon={{
              before: <AiOutlineUser />,
            }}
          />
          <Field
            variant="TEXT"
            name="password"
            placeholder="Mật khẩu"
            type={showPassword ? "text" : "password"}
            icon={{
              before: <FiLock />,
              after: (
                <Box cursor="pointer" onClick={setShowPassword.toggle}>
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </Box>
              ),
            }}
          />
          <Text align="right">
            <Link
              href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/LostPassword.aspx"
              target="_blank"
            >
              Quên mật khẩu?
            </Link>
          </Text>
          <Button
            colorScheme="green"
            type="submit"
            isDisabled={isLoading}
            isLoading={isLoading}
          >
            Đăng nhập
          </Button>
        </Stack>
      </form>
    </FormProvider>
  )
}

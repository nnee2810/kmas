import { Box, Button, Link, Stack, Text, useBoolean } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField } from "components/basic"
import Field from "components/core/Field"
import { useGetLessons } from "features/auth/hooks/useGetLessons"
import { useAppDispatch } from "hooks/useAppStore"
import md5 from "md5"
import { FormProvider, useForm } from "react-hook-form"
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai"
import { FiLock } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { setUser } from "store/reducers/user"
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
export default function FormSignIn() {
  const navigate = useNavigate()
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
      { studentCode, password: md5(password) },
      {
        onSuccess(data) {
          dispatch(setUser(data))
          navigate("/", {
            replace: true,
          })
        },
      },
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Stack spacing="3">
          <Field name="studentCode">
            <TextField
              placeholder="Mã sinh viên"
              icon={{
                before: <AiOutlineUser />,
              }}
            />
          </Field>
          <Field name="password">
            <TextField
              placeholder="Mật khẩu"
              type={showPassword ? "text" : "password"}
              icon={{
                before: <FiLock />,
                after: (
                  <Box cursor="pointer" onClick={setShowPassword.toggle}>
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </Box>
                ),
              }}
            />
          </Field>
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

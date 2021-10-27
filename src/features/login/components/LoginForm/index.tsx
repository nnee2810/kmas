import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  HTTP_NOT_FOUND,
  HTTP_SERVICE_UNAVAILABLE,
  HTTP_UNAUTHORIZED,
} from "defines/common"
import { useAppDispatch } from "hooks/useAppStore"
import usePostLogin from "hooks/usePostLogin"
import md5 from "md5"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai"
import { FiLock } from "react-icons/fi"
import { toast } from "react-toastify"
import { setLogin } from "store/reducers/user"

export default function LoginForm() {
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const { mutate, isLoading } = usePostLogin()

  const onSubmit = ({ studentCode, password }: any) => {
    if (isLoading) return
    mutate(
      { studentCode, password: md5(password) },
      {
        onSuccess(data) {
          toast.success("Đăng nhập thành công")
          dispatch(setLogin(data))
        },
        onError(error: any) {
          switch (error.response.status) {
            case HTTP_UNAUTHORIZED: {
              toast.error("Tài khoản hoặc mật khẩu không chính xác")
              break
            }
            case HTTP_SERVICE_UNAVAILABLE:
            case HTTP_NOT_FOUND: {
              toast.error("Lỗi máy chủ")
              break
            }
            default:
              break
          }
        },
      }
    )
  }
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Box>
          <InputGroup>
            <InputLeftElement>
              <AiOutlineUser />
            </InputLeftElement>
            <Input
              placeholder="Mã sinh viên"
              focusBorderColor="green.500"
              isInvalid={!!errors.studentCode}
              disabled={isLoading}
              {...register("studentCode", {
                required: {
                  value: true,
                  message: "Chưa nhập mã sinh viên kìa",
                },
                minLength: { value: 6, message: "Mã sinh viên không hợp lệ" },
                maxLength: { value: 10, message: "Mã sinh viên không hợp lệ" },
              })}
            />
          </InputGroup>
          <Text color="red" fontSize={12}>
            {errors?.studentCode?.message}
          </Text>
        </Box>
        <Box>
          <InputGroup>
            <InputLeftElement>
              <FiLock />
            </InputLeftElement>
            <Input
              placeholder="Mật khẩu"
              type={showPassword ? "text" : "password"}
              focusBorderColor="green.500"
              isInvalid={!!errors.password}
              disabled={isLoading}
              {...register("password", {
                required: {
                  value: true,
                  message: "Chưa nhập mật khẩu kìa",
                },
                maxLength: { value: 32, message: "Mật khẩu không hợp lệ" },
              })}
            />
            <InputRightElement
              cursor="pointer"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </InputRightElement>
          </InputGroup>
          <Text color="red" fontSize={12}>
            {errors?.password?.message}
          </Text>
        </Box>
        <Button colorScheme="green" type="submit" isDisabled={isLoading}>
          {isLoading ? <Spinner size="sm" /> : "Đăng nhập"}
        </Button>
      </Stack>
    </form>
  )
}

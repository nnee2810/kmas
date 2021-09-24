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
import useAuth from "hooks/useAuth"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai"
import { FiLock } from "react-icons/fi"

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const onSubmit = ({ studentCode, password }: any) => {
    setLoading(true)
    login({ studentCode, password }).then((res) => setLoading(false))
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
              disabled={loading}
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
              disabled={loading}
              {...register("password", {
                required: {
                  value: true,
                  message: "Chưa nhập mật khẩu kìa",
                },
                maxLength: { value: 32, message: "Mật khẩu không hợp lệ" },
              })}
            />
            <InputRightElement cursor="pointer" onClick={handleClickShowPassword}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </InputRightElement>
          </InputGroup>
          <Text color="red" fontSize={12}>
            {errors?.password?.message}
          </Text>
        </Box>
        <Button colorScheme="green" type="submit" disabled={loading}>
          {loading ? <Spinner size="sm" /> : "Đăng nhập"}
        </Button>
      </Stack>
    </form>
  )
}

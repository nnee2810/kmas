import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai"
import { FiLock } from "react-icons/fi"

export default function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (data: any) => console.log(data)
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <InputGroup>
          <InputLeftElement>
            <AiOutlineUser />
          </InputLeftElement>
          <Input
            placeholder="Tài khoản"
            focusBorderColor="green.500"
            {...register("username")}
            maxLength={10}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement>
            <FiLock />
          </InputLeftElement>
          <Input
            placeholder="Mật khẩu"
            type={showPassword ? "text" : "password"}
            focusBorderColor="green.500"
            maxLength={32}
            {...register("password")}
          />
          <InputRightElement cursor="pointer" onClick={handleClickShowPassword}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="green" type="submit">
          Đăng nhập
        </Button>
      </Stack>
    </form>
  )
}

import { Box, Center, Link, Text } from "@chakra-ui/react"
import LogoText from "components/LogoText"
import React from "react"
import LoginForm from "./components/LoginForm"

const boxShadow = `0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)`

export default function Login() {
  return (
    <Center
      bg="linear-gradient(
        45deg,
        rgba(29, 229, 226, 1) 0%,
        rgb(53 231 165) 88%
        )"
      color="black"
      px={4}
    >
      <Box
        bg="white"
        px={6}
        py={12}
        borderRadius={4}
        boxShadow={boxShadow}
        width={{ base: "100%", sm: "400px" }}
      >
        <LogoText />
        <Box mt={5}>
          <LoginForm />
        </Box>
        <Text mt={3} align="right">
          <Link
            href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/LostPassword.aspx"
            target="_blank"
          >
            Quên mật khẩu?
          </Link>
        </Text>
      </Box>

      <Text position="absolute" bottom={1} color="white">
        Góp ý, báo lỗi
        <Link
          textDecoration="underline"
          href="mailto:dvn281002@gmail.com"
          mx={1}
        >
          tại đây
        </Link>
        nha 💖
      </Text>
    </Center>
  )
}

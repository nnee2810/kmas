import { Link, Text } from "@chakra-ui/react"
import React from "react"

export default function Footer() {
  return (
    <Text position="absolute" bottom="1" color="white">
      Góp ý, báo lỗi
      <Link textDecoration="underline" href="mailto:dvn281002@gmail.com" mx="1">
        tại đây
      </Link>
      nha 💖
    </Text>
  )
}

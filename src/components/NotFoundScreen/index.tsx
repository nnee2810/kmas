import { Button, Center, Image, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

export default function NotFoundScreen() {
  return (
    <Center flexDirection="column">
      <Text fontWeight={500} fontSize={38}>
        404
      </Text>
      <Image
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt=""
        width={600}
      />
      <Link to="/schedule">
        <Button colorScheme="red">Back home</Button>
      </Link>
    </Center>
  )
}

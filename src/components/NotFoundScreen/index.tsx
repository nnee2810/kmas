import { Box, Button } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Text404 = styled.div`
  font-size: 72px;
`

export default function NotFoundScreen() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text404>404</Text404>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt=""
      />
      <Link to="/app">
        <Button color="success" size="large">
          Back home
        </Button>
      </Link>
    </Box>
  )
}

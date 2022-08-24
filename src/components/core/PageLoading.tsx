import { Center } from "@chakra-ui/react"
import tail_spin from "assets/images/tail-spin.svg"

export default function PageLoading() {
  return (
    <Center h="100vh">
      <img src={tail_spin} alt="" width="80px" />
    </Center>
  )
}

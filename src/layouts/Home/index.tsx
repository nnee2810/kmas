import { Grid, GridItem } from "@chakra-ui/react"
import React, { ReactElement } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

interface HomeLayoutProps {
  children?: ReactElement
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Grid
      templateRows={{
        base: "60px calc(100vh - 120px) 60px",
        lg: "60px calc(100vh - 60px)",
      }}
      templateColumns={{ base: "1fr", lg: "60px 1fr" }}
      templateAreas={{
        base: "'header' 'main' 'sidebar'",
        lg: "'header header' 'sidebar main'",
      }}
    >
      <Header />
      <Sidebar />
      <GridItem gridArea="main" overflow="auto">
        {children}
      </GridItem>
    </Grid>
  )
}

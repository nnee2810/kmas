import { Grid, GridItem } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

interface HomeLayoutProps {
  children?: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Grid
      templateRows="60px calc(100vh - 60px)"
      templateColumns="60px 1fr"
      templateAreas="'header header' 'sidebar main'"
    >
      <Header />
      <Sidebar />
      <GridItem gridArea="main" overflow="auto">
        {children}
      </GridItem>
    </Grid>
  )
}

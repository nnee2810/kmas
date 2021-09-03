import { Grid, GridItem } from "@chakra-ui/react"
import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import HomeLayoutRouter from "./router"

export default function HomeLayout() {
  return (
    <Grid
      templateRows="60px 1fr"
      templateColumns="60px 1fr"
      templateAreas="'header header' 'sidebar main'"
    >
      <Header />
      <Sidebar />
      <GridItem gridArea="main">
        <HomeLayoutRouter />
      </GridItem>
    </Grid>
  )
}

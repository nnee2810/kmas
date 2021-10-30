import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

interface HomeLayoutProps {
  children?: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const templateRows = useBreakpointValue({
    lg: "60px calc(100vh - 60px)",
    base: "60px calc(100vh - 120px) 60px",
  })
  const templateColumns = useBreakpointValue({ lg: "60px 1fr", base: "1fr" })
  const templateAreas = useBreakpointValue({
    lg: "'header header' 'sidebar main'",
    base: "'header' 'main' 'sidebar'",
  })

  return (
    <Grid
      templateRows={templateRows}
      templateColumns={templateColumns}
      templateAreas={templateAreas}
    >
      <Header />
      <Sidebar />
      <GridItem gridArea="main" overflow="auto">
        {children}
      </GridItem>
    </Grid>
  )
}

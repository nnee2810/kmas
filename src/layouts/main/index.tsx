import { Grid, GridItem } from "@chakra-ui/react"
import { useAppSelector } from "hooks/useAppStore"
import { Navigate, Outlet } from "react-router-dom"
import { userSelector } from "store/reducers/user"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

export default function MainLayout() {
  const { profile } = useAppSelector(userSelector)

  if (!profile) return <Navigate to="/auth/sign-in" />

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
        <Outlet />
      </GridItem>
    </Grid>
  )
}

import { Grid } from "@chakra-ui/react"
import LoadingScreen from "components/LoadingScreen"
import React, { Suspense } from "react"
import HomeLayoutRouter from "./router"

export default function HomeLayout() {
  return (
    <Grid>
      <Suspense fallback={<LoadingScreen />}>
        <HomeLayoutRouter />
      </Suspense>
    </Grid>
  )
}

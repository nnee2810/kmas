import LoadingScreen from "components/LoadingScreen"
import React, { Suspense } from "react"
import HomeLayoutRouter from "./router"

export default function HomeLayout() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomeLayoutRouter />
    </Suspense>
  )
}

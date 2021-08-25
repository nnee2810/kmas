import LoadingScreen from "components/LoadingScreen"
import AppRouter from "configs/router"
import React, { Suspense } from "react"
import { GlobalStyle } from "styles"

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<LoadingScreen />}>
        <AppRouter />
      </Suspense>
    </>
  )
}

export default App

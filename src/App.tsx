import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "@emotion/react"
import LoadingScreen from "components/LoadingScreen"
import AppRouter from "configs/router"
import React, { Suspense } from "react"
import { GlobalStyle } from "styles"
import lightTheme from "styles/theme/light"

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <ChakraProvider>
          <Suspense fallback={<LoadingScreen />}>
            <AppRouter />
          </Suspense>
        </ChakraProvider>
      </ThemeProvider>
    </>
  )
}

export default App

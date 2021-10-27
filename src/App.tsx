import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "@emotion/react"
import LoadingScreen from "components/LoadingScreen"
import AppRouter from "configs/router"
import React, { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { GlobalStyle } from "styles"
import lightTheme from "styles/theme/light"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <ThemeProvider theme={lightTheme}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Suspense fallback={<LoadingScreen />}>
              <AppRouter />
            </Suspense>
          </ChakraProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App

import { ChakraProvider } from "@chakra-ui/react"
import LoadingScreen from "components/LoadingScreen"
import AppRouter from "configs/router"
import React, { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Suspense fallback={<LoadingScreen />}>
            <AppRouter />
          </Suspense>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}

export default App

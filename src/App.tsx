import { ChakraProvider } from "@chakra-ui/react"
import { AppRoutes, PageLoading } from "components/core"
import { handleAxiosError } from "helpers/handleAxiosError"
import "moment/locale/vi"
import { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      onError: handleAxiosError,
    },
    mutations: {
      onError: handleAxiosError,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoading />}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </ChakraProvider>
      <ToastContainer autoClose={2000} />
    </QueryClientProvider>
  )
}

export default App

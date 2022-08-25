import { ChakraProvider } from "@chakra-ui/react"
import { AppRoutes, PageLoading } from "components/core"
import { handleAxiosError } from "helpers/handleAxiosError"
import "moment/locale/vi"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"

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
      <Toaster />
    </QueryClientProvider>
  )
}

export default App

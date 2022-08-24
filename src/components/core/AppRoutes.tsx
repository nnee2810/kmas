import AuthLayout from "layouts/auth"
import MainLayout from "layouts/main"
import { lazy } from "react"
import { RouteObject, useRoutes } from "react-router-dom"

const SignIn = lazy(() => import("features/auth/pages/SignIn"))
const Schedule = lazy(() => import("features/schedule/pages/Schedule"))
const PageNotFound = lazy(() => import("components/core/PageNotFound"))

const routes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Schedule />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]

export default function AppRoutes() {
  const element = useRoutes(routes)
  return element
}

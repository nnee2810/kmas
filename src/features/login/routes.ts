import AppRoute from "defines/IAppRoute"
import { lazy } from "react"

const Login = lazy(() => import("."))

const loginRoutes: AppRoute[] = [
  {
    name: "Login",
    component: Login,
    exact: true,
    path: "/login",
    requireAuth: false,
  },
]

export default loginRoutes

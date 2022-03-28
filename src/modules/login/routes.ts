import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const Login = lazy(() => import("."))

const loginRoutes: AppRoute[] = [
  {
    name: "Đăng nhập",
    component: Login,
    exact: true,
    path: "/login",
    requireAuth: false,
  },
]

export default loginRoutes

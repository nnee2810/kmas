import AppRoute from "defines/IAppRoute"
import Login from "."

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

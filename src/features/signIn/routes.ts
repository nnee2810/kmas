import AppRoute from "defines/IAppRoute"
import SignIn from "."

const signInRoutes: AppRoute[] = [
  {
    name: "Sign in",
    component: SignIn,
    exact: true,
    path: "/signin",
    requireAuth: false,
  },
]

export default signInRoutes

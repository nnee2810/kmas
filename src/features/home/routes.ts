import AppRoute from "types/IAppRoute"
import Home from "."

const homeRoutes: AppRoute[] = [
  {
    name: "Home",
    component: Home,
    exact: true,
    path: "/app",
    requireAuth: true,
  },
]

export default homeRoutes

import AppRoute from "defines/IAppRoute"
import { lazy } from "react"

const Schedule = lazy(() => import("."))

const scheduleRoutes: AppRoute[] = [
  {
    name: "Home",
    component: Schedule,
    exact: true,
    path: "/schedule",
    requireAuth: true,
  },
]

export default scheduleRoutes

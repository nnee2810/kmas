import AppRoute from "defines/IAppRoute"
import { lazy } from "react"

const Lessons = lazy(() => import("."))

const lessonsRoutes: AppRoute[] = [
  {
    name: "Home",
    component: Lessons,
    exact: true,
    path: "/lessons",
    requireAuth: true,
  },
]

export default lessonsRoutes

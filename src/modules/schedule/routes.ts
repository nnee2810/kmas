import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const Lessons = lazy(() => import("."))

const lessonsRoutes: AppRoute[] = [
  {
    name: "Home",
    component: Lessons,
    exact: true,
    path: "/schedule",
    requireAuth: true,
  },
]

export default lessonsRoutes

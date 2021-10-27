import AppRoute from "defines/IAppRoute"
import Schedule from "."

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

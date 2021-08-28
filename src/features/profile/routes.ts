import AppRoute from "defines/IAppRoute"
import Profile from "."

const profileRoutes: AppRoute[] = [
  {
    name: "Profile",
    component: Profile,
    exact: true,
    path: "/app/profile",
    requireAuth: true,
  },
]

export default profileRoutes

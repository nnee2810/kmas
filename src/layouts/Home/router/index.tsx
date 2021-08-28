import Routes from "components/Routes"
import AppRoute from "defines/IAppRoute"
import homeRoutes from "features/home/routes"
import profileRoutes from "features/profile/routes"

const routes: AppRoute[] = [...homeRoutes, ...profileRoutes]

export default function HomeLayoutRouter() {
  return <Routes routes={routes} />
}

import Routes from "components/Routes"
import homeRoutes from "features/home/routes"
import { Switch } from "react-router-dom"
import AppRoute from "types/IAppRoute"

const routes: AppRoute[] = [...homeRoutes]

export default function HomeLayoutRouter() {
  return (
    <Switch>
      <Routes routes={routes} />
    </Switch>
  )
}

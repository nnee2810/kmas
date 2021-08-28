import NotFoundScreen from "components/NotFoundScreen"
import Routes from "components/Routes"
import signInRoutes from "features/signIn/routes"
import HomeLayout from "layouts/Home"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import AppRoute from "types/IAppRoute"

const routes: AppRoute[] = [
  {
    path: "/app",
    exact: false,
    component: HomeLayout,
    requireAuth: true,
  },
  ...signInRoutes,
]

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/app" />
        </Route>
        <Routes routes={routes} />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </Router>
  )
}

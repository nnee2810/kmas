import LoadingScreen from "components/LoadingScreen"
import NotFoundScreen from "components/NotFoundScreen"
import signInRoutes from "features/signIn/routes"
import { Helmet } from "react-helmet"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import AppRoute from "types/IAppRoute"

const routes: AppRoute[] = [
  {
    name: "Home",
    path: "/app",
    exact: false,
    component: LoadingScreen,
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
        {routes.map((route, idx) => (
          <Route
            path={route.path}
            exact={route.exact}
            render={() => (
              <>
                <Helmet titleTemplate="KMAS | %s" title={route.name} />
                <route.component />
              </>
            )}
            key={"route" + idx}
          />
        ))}
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </Router>
  )
}

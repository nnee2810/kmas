import NotFoundScreen from "components/NotFoundScreen"
import signInRoutes from "features/signIn/routes"
import { useAppSelector } from "hooks/useAppStore"
import HomeLayout from "layouts/Home"
import { Helmet } from "react-helmet"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import { userSelector } from "store/reducers/user"
import AppRoute from "types/IAppRoute"

const routes: AppRoute[] = [
  {
    name: "Home",
    path: "/app",
    exact: false,
    component: HomeLayout,
    requireAuth: true,
  },
  ...signInRoutes,
]

export default function AppRouter() {
  const { token } = useAppSelector(userSelector)

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
                {route.requireAuth
                  ? !token && <Redirect to="/signin" />
                  : token && <Redirect to="/app" />}
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

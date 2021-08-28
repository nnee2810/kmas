import NotFoundScreen from "components/NotFoundScreen"
import Routes from "components/Routes"
import AppRoute from "defines/IAppRoute"
import signInRoutes from "features/signIn/routes"
import HomeLayout from "layouts/Home"
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"

const routes: AppRoute[] = [
  {
    path: "/app",
    exact: false,
    component: HomeLayout,
    requireAuth: true,
  },
  ...signInRoutes,
  {
    path: "*",
    component: NotFoundScreen,
    exact: false,
    requireAuth: false,
  },
]

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact>
        <Redirect to="/app" />
      </Route>
      <Routes routes={routes} />
    </Router>
  )
}

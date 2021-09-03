import LoadingScreen from "components/LoadingScreen"
import NotFoundScreen from "components/NotFoundScreen"
import Routes from "components/Routes"
import { TOKEN } from "defines/common"
import AppRoute from "defines/IAppRoute"
import loginRoutes from "features/login/routes"
import { useAppDispatch } from "hooks/useAppStore"
import HomeLayout from "layouts/Home"
import { useEffect, useState } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { fetchLogin } from "store/reducers/user"

const routes: AppRoute[] = [
  {
    path: "/app",
    exact: false,
    component: HomeLayout,
    requireAuth: true,
  },
  ...loginRoutes,
]

export default function AppRouter() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem(TOKEN)) dispatch(fetchLogin()).then(() => setLoading(false))
    else setLoading(false)
  }, [dispatch])

  return loading ? (
    <LoadingScreen />
  ) : (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/app" />
        </Route>
        <Routes routes={routes} />
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

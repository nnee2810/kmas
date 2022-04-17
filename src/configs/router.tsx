import NotFoundScreen from "components/NotFoundScreen"
import { useAppDispatch, useAppSelector } from "hooks/useAppStore"
import loginRoutes from "modules/login/routes"
import scheduleRoutes from "modules/schedule/routes"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { setLogin, userSelector } from "store/reducers/user"
import { AppRoute } from "types/AppRoute"
import { STORAGE_KEY } from "./constants"

const routes: AppRoute[] = [...scheduleRoutes, ...loginRoutes]

export default function AppRouter() {
  const dispatch = useAppDispatch()
  const { loggedIn } = useAppSelector(userSelector)

  useEffect(() => {
    let profile = localStorage.getItem(STORAGE_KEY.PROFILE),
      lessons = localStorage.getItem(STORAGE_KEY.LESSONS)

    try {
      if (profile && lessons) {
        dispatch(
          setLogin({
            profile: JSON.parse(profile),
            lessons: JSON.parse(lessons),
          })
        )
      }
    } catch (err) {
      localStorage.clear()
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        {routes.map((route, idx) => (
          <Route path={route.path} exact={route.exact} key={"route" + idx}>
            {route.requireAuth
              ? !loggedIn && <Redirect to="/login" />
              : loggedIn && <Redirect to="/schedule" />}
            {route.name && <Helmet title={`KMAS | ${route.name}`} />}
            <route.component />
          </Route>
        ))}
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

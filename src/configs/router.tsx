import NotFoundScreen from "components/NotFoundScreen"
import AppRoute from "defines/IAppRoute"
import loginRoutes from "features/login/routes"
import scheduleRoutes from "features/schedule/routes"
import { useAppDispatch, useAppSelector } from "hooks/useAppStore"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { setLogin, userSelector } from "store/reducers/user"

const routes: AppRoute[] = [...scheduleRoutes, ...loginRoutes]

export default function AppRouter() {
  const dispatch = useAppDispatch()
  const { loggedIn } = useAppSelector(userSelector)

  useEffect(() => {
    const profile = localStorage.getItem("profile"),
      lessons = localStorage.getItem("lessons")

    if (profile && lessons) {
      dispatch(
        setLogin({
          profile: JSON.parse(profile),
          lessons: JSON.parse(lessons),
        })
      )
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

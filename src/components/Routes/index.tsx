import AppRoute from "defines/IAppRoute"
import { useAppSelector } from "hooks/useAppStore"
import React from "react"
import { Helmet } from "react-helmet"
import { Redirect, Route, Switch } from "react-router-dom"
import { userSelector } from "store/reducers/user"

interface RoutesProps {
  routes: AppRoute[]
}

export default function Routes({ routes }: RoutesProps) {
  const { loggedIn } = useAppSelector(userSelector)

  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route path={route.path} exact={route.exact} key={"route" + idx}>
          {route.requireAuth
            ? !loggedIn && <Redirect to="/login" />
            : loggedIn && <Redirect to="/app" />}
          {route.name && (
            <Helmet titleTemplate="KMAS | %s" title={route.name} />
          )}
          <route.component />
        </Route>
      ))}
    </Switch>
  )
}

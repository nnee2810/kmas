import { useAppSelector } from "hooks/useAppStore"
import React from "react"
import { Helmet } from "react-helmet"
import { Redirect, Route } from "react-router-dom"
import { userSelector } from "store/reducers/user"
import AppRoute from "types/IAppRoute"

interface RoutesProps {
  routes: AppRoute[]
}

export default function Routes({ routes }: RoutesProps) {
  const { token } = useAppSelector(userSelector)

  return (
    <>
      {routes.map((route, idx) => (
        <Route
          path={route.path}
          exact={route.exact}
          render={() => (
            <>
              {route.requireAuth
                ? !token && <Redirect to="/signin" />
                : token && <Redirect to="/app" />}
              {route.name && (
                <Helmet titleTemplate="KMAS | %s" title={route.name} />
              )}
              <route.component />
            </>
          )}
          key={"route" + idx}
        />
      ))}
    </>
  )
}

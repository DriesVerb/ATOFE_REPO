import { BaseRoute } from '#/routing/base/base'
import { Route, Switch } from 'wouter'

export const MainRouteSwitch = () => {

  return (
      <Switch>
        <BaseRoute />
        <Route>404</Route>
      </Switch>
  )
}

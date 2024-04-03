import { LogoutView } from '#/views/auth/authLogout'
import { Route, Switch } from 'wouter'

export const LogoutRoute = () => {
  return (
    <Switch>
      <Route path="/logout">
        <LogoutView />
      </Route>
    </Switch>
  )
}

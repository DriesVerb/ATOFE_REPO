import { Route, Switch } from 'wouter'
import { LoginView } from '#/views/auth/authLogin.view'

export const LoginRoute = () => {
  return (
    <Switch>
      <Route path="/login">
        <LoginView />
      </Route>
    </Switch>
  )
}

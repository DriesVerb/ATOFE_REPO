import { Route } from 'wouter'
import { LoginView } from '#/views/auth/authLogin.view'

export const LoginRoute = () => {
  return (
    <Route path="/login">
      <LoginView />
    </Route>
  )
}

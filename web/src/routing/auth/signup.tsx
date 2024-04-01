import { SignUpView } from '#/views/auth/authSignUp'
import { Route, Switch } from 'wouter'

export const SignUpRoute = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpView />
      </Route>
    </Switch>
  )
}

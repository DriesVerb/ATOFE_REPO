import { SignUpView } from '#/views/auth/authSignUp'
import { Route } from 'wouter'

export const SignUpRoute = () => {
  return (
    <Route path="/signup">
      <SignUpView />
    </Route>
  )
}

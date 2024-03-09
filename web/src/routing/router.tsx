import {  Router } from 'wouter'
import { BaseRoute } from '#/routing/base/base'
import { LoginRoute } from './auth/login'
import { SignUpRoute } from './auth/signup'

export const MainRouter = () => {
  return (
    <Router>
      <LoginRoute />
      <SignUpRoute />
      <BaseRoute />
    </Router>
  )
}

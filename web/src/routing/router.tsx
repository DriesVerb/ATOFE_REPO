import { BaseRoute } from '#/routing/base/base'
import {  Router } from 'wouter'
import { LoginRoute } from './auth/login'

export const MainRouter = () => {
  return (
    <Router>
      <LoginRoute />
      <BaseRoute />
    </Router>
  )
}

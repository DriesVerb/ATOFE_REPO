import { Router } from 'wouter'
import { BaseRoute } from '#/routing/base/base'
import { LoginRoute } from './auth/login'
import { SignUpRoute } from './auth/signup'
import { ProfileMeRoute } from './profile/profileMe'
import { LogoutRoute } from './auth/logout'

export const MainRouter = () => {
  return (
    <Router>
      <SignUpRoute />
      <LoginRoute />
      <LogoutRoute />
      <ProfileMeRoute />
      <BaseRoute />
    </Router>
  )
}

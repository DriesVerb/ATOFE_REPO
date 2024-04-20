import { Router } from 'wouter'
import { BaseRoute } from '#/routing/base/base'
import { LoginRoute } from './auth/login'
import { SignUpRoute } from './auth/signup'
import { ProfileMeRoute } from './profile/profileMe'
import { LogoutRoute } from './auth/logout'
import { ProfileUpdateRoute } from './profile/profileUpdate'
import { ProfileUsernameRouter } from './profile/profileUsername'

export const MainRouter = () => {
  return (
    <Router>
      <SignUpRoute />
      <LoginRoute />
      <LogoutRoute />
      <ProfileMeRoute />
      <ProfileUpdateRoute />
      <ProfileUsernameRouter />
      <BaseRoute />
    </Router>
  )
}

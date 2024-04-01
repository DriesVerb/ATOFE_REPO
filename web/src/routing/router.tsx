import { Router } from 'wouter'
import { BaseRoute } from '#/routing/base/base'
import { LoginRoute } from './auth/login'
import { SignUpRoute } from './auth/signup'
import { ProfileMeRoute } from './profile/profileMe'

export const MainRouter = () => {
  return (
    <Router>
      <SignUpRoute />
      <LoginRoute />
      <ProfileMeRoute /> 
      <BaseRoute />
    </Router>
  )
}

import { Router } from 'wouter'
import { BaseRoute } from '#/routing/base/base'
import { LoginRoute } from './auth/login'
import { SignUpRoute } from './auth/signup'
import { ProfileMeRoute } from './profile/profileMe'
import { LogoutRoute } from './auth/logout'
import { ProfileUpdateRoute } from './profile/profileUpdate'
import { ProfileUsernameRouter } from './profile/profileUsername'
import { StoryCreateRoute } from './story/storyCreate'
import { DraftsRoute } from './story/drafts'

export const MainRouter = () => {
  return (
    <Router>
      <BaseRoute />
      <LoginRoute />
      <DraftsRoute />
      <SignUpRoute />
      <LogoutRoute />
      <ProfileMeRoute />
      <ProfileUpdateRoute />
      <ProfileUsernameRouter />
      <StoryCreateRoute />
    </Router>
  )
}

import { ProfileMe } from '#/views/profile/profileMe'
import { Route } from 'wouter'

export const ProfileMeRoute = () => {

  return (
    <Route path="profile">
      <ProfileMe />
    </Route>
  )
}

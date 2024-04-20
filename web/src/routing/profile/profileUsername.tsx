import { ProfileUsernameView } from '#/views/profile/profileUsername'
import { Route, Switch } from 'wouter'

export const ProfileUsernameRouter = () => {
  return (
    <Switch>
      <Route path="/user/profile/:username">
        <ProfileUsernameView />
      </Route>
    </Switch>
  )
}

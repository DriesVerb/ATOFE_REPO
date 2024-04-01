import { Route, Switch } from 'wouter'
import { StartView } from '#/views/start/start.view'

export const BaseRoute = () => {
  return (
    <Switch>
      <Route path="/">
        <StartView />
      </Route>
    </Switch>
  )
}

import { Route } from 'wouter'
import { StartView } from '#/views/start/start.view'

export const BaseRoute = () => {
  return (
    <Route path="/">
      <StartView />
    </Route>
  )
}

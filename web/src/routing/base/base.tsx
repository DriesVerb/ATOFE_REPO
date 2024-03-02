import { StartView } from "#/views/start/start.view"
import { Route } from "wouter"

export const BaseRoute = () => {
  
  return (
    <Route path="/">
      <StartView />
    </Route>
  )

}

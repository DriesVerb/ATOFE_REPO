import { BaseRoute } from '#/routing/base/base'
import { Route, Switch } from 'wouter'

export const MainContainer = () => {

  return (
    <main className="p-2 gap-2 md:gap-3 lg:max-w-screen-2xl grid grid-cols-12 auto-rows-auto">
      <Switch>
        <BaseRoute />
        <Route>404</Route>
      </Switch>
    </main>
  )
}

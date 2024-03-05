import { MainRouteSwitch } from '#/routing/switch'

export const MainContainer = () => {

  return (
    <main className="p-2 gap-2 md:gap-3 lg:max-w-screen-2xl grid grid-cols-12 auto-rows-auto">
      <MainRouteSwitch />
   </main>
  )
}

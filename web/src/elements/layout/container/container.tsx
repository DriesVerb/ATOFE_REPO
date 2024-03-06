import { MainRouter } from '#/routing/router'

export const MainContainer = () => {

  return (
    <main className="p-2 gap-2 grid-cols-6 min-h-screen md:gap-3 lg:max-w-screen-2xl grid md:grid-cols-10 auto-rows-auto">
      <MainRouter />
   </main>
  )
}

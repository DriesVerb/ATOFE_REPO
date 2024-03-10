import { MainRouter } from '#/routing/router'

export const MainContainer = () => {
  return (
    <main
      className="px-1.5
      grid
      grid-cols-1
      md:grid-cols-4
      min-h-screen 
      md:gap-3
      lg:max-w-screen-2xl
      auto-rows-max"
    >
      <MainRouter />
    </main>
  )
}

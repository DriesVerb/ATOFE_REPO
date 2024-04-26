import { MainRouter } from '#/routing/router'

export const MainContainer = () => {
  return (
    <main
      className="px-1.5
      grid
      grid-cols-1
      min-h-screen 
      min-w-full
      md:gap-3
      md:grid-cols-4
      lg:px-36
      xl:px-52
      auto-rows-max"
    >
      <MainRouter />
    </main>
  )
}

import {  Children } from '#/types/global/common'

export const MainContainer = ({ children }: { children: Children }) => {
  return <main className="bg-secondary p-2 lg:max-w-screen-2xl grid grid-cols-12 auto-rows-auto">{children}</main>
}

import { Children } from '#/types/global/common'

export const AuthContainter = ({ children }: { children: Children }) => {
  return (
    <div className="h-fit p-2 mt-24 md:p-4 rounded-2xl col-start-1 col-end-7 sm:col-start-3 sm:col-end-9 border-bg-neutral-content border-4">
      {children}
    </div>
  )
}

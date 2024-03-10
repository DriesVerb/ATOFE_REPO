import { Children } from '#/types/global/common'

export const AuthContainter = ({ children }: { children: Children }) => {
  return (
    <div className="h-fit p-2 md:p-4 rounded-2xl md:col-start-2 md:col-end-4 border-bg-neutral-content border-4">
      {children}
    </div>
  )
}

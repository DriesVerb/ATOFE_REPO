import { ReactNode } from 'react'

interface GroupProps {
  children: ReactNode
  justify: string
}

export const Group = (props: GroupProps) => {
  const { children, justify } = props

  return <div className={`flex gap-4 justify-${justify}`} >{children}</div>
}

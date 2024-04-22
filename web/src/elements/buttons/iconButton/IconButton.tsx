import clsx from 'clsx'
import React from 'react'
import { Children } from '#/types/global/common'

interface IconProps {
  children: Children
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  ngclass?: string
}

export const Icon = React.forwardRef<HTMLButtonElement, IconProps>(
  (props, ref) => {
    const { children, ngclass,} = props

    const classInput = clsx(
       `btn-xs md:btn text-xs md:text-lg ${ngclass}`
    )

    return (
      <button ref={ref} className={classInput} {...props}>
        {children}
      </button>
    )
  }
)

import clsx from 'clsx'
import React from 'react'
import { Children } from '#/types/global/common'

interface IconProps {
  children: Children
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  ngclass?: string
  variant?: string
}

export const Icon = React.forwardRef<HTMLButtonElement, IconProps>(
  (props, ref) => {
    const { children, ngclass, variant = 'circle' } = props

    const classInput = clsx(
      `btn btn-${variant} text-xs md:text-lg md:min-h-10' ${ngclass}`
    )

    return (
      <button ref={ref} className={classInput} {...props}>
        {children}
      </button>
    )
  }
)

import clsx from 'clsx'
import React from 'react'

interface BasicProps {
  text: string
  type?: 'submit' | 'button' | 'reset'
  tail?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: string
}

export const Basic = React.forwardRef<HTMLButtonElement, BasicProps>(
  (props, ref) => {
    const { text, tail, variant = 'primary' } = props

    const classInput = clsx(
      `btn btn-${variant} text-xs min-h-7 max-h-7 md:text-lg md:min-h-10' ${tail}`
    )

    return (
      <button ref={ref} className={classInput} {...props}>
        {text}
      </button>
    )
  }
)

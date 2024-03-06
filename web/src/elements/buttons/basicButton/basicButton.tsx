import React from 'react'

interface BasicProps {
  text: string
  type: 'submit' | 'button' | 'reset'
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: string
}

export const Basic = React.forwardRef<HTMLButtonElement, BasicProps>(
  (props, ref) => {
    const { text, variant = 'primary' } = props

    return (
      <button
        ref={ref}
        className={`btn btn-${variant} text-xs min-h-7 max-h-7 md:text-lg md:min-h-10`}
        {...props}
      >
        {text}
      </button>
    )
  }
)

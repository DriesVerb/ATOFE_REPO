import clsx from "clsx"
import React from "react"

interface InputProps {
  placeholdertext: string
  type?: string
  variant?: string
  tail?: string
}

export const Text = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { placeholdertext, tail, variant = 'primary', type = 'text' } = props

  const classInput = clsx(`text-xs min-h-7 max-h-7 md:text-lg md:min-h-10 input input-bordered input-${variant} w-full ${tail}`)

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholdertext}
      className={classInput}
      {...props}
    />
  )
})

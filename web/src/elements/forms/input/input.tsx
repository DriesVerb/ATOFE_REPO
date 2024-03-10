import clsx from 'clsx'
import React from 'react'

interface InputProps {
  placeholdertext: string
  label: string
  error?: string
  type?: string
  variant?: string
  classname?: string
}

export const Text = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      label,
      placeholdertext,
      classname,
      error,
      variant = 'primary',
      type = 'text',
    } = props

    const classInput = clsx(`text-xs min-h-7
      max-h-7 md:text-lg md:min-h-10 
      input input-bordered input-${variant} w-full ${classname} ${error && 'input-error'}`)

    return (
      <div>
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          aria-label={label}
          ref={ref}
          type={type}
          placeholder={placeholdertext}
          className={classInput}
          aria-errormessage={error}
          {...props}
        />
        {error && (
          <div className="label">
            <span className="label-text-alt">{error}</span>
          </div>
        )}
      </div>
    )
  }
)

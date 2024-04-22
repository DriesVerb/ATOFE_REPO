import clsx from 'clsx'
import React from 'react'

interface InputProps {
  placeholdertext: string
  label: string
  error?: string
  defaultValue?: string
  type?: string
  variant?: string
  value?: string
  classname?: string
}

interface TextAreaProps extends InputProps {
  onBlur?: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

export const Text = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      label,
      value,
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
          value={value}
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

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { label, value, onBlur } = props

    return (
      <>
        <textarea
          aria-label={label}
          className="textarea textarea-bordered text-xs md:text-lg"
          value={value}
          ref={ref}
          onBlur={onBlur}
          {...props}
        />
      </>
    )
  }
)

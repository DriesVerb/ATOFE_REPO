interface Input {
  placeholdertext: string
  type?: string
  variant?: string
  className?: string
}

export const Text = (props: Input) => {
  const { placeholdertext, className, variant = 'primary', type = 'text' } = props

  return (
    <input
      type={type}
      placeholder={placeholdertext}
      className={`text-xs min-h-7 max-h-7 md:text-lg md:min-h-10 input input-bordered input-${variant} w-full ${className}`}
      {...props}
    />
  )
}

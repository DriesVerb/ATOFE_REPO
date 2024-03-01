interface BasicProps {
  text: string
  variant: string
  onClick: () => void
}

export const Basic = (props: BasicProps) => {
  const { text, variant, onClick } = props

  return (
    <button className={`btn btn-${variant} text-xs min-h-7 max-h-7 md:text-lg md:min-h-10`} onClick={onClick}>
      {text}
    </button>
  )
}

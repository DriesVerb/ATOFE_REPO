interface BasicProps {
  text: string
  variant: string
  onClick: () => void
}

export const Basic = (props: BasicProps) => {
  const { text, variant, onClick } = props

  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  )
}

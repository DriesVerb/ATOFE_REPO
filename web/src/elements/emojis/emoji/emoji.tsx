interface EmojiProps {
  code: string
  info: string
}

export const Emoji = (props: EmojiProps) => {
  const { code, info } = props

  return (
    <div className="tooltip tooltip-right tooltip-accent" data-tip={info}>
      <div className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl">{code}</div>
    </div>
  )
}

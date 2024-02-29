interface EmojiProps {
  code: string
}

export const Emoji = (props: EmojiProps) => {
  const { code } = props

  return (
      <div className="sm:text-3xl md:text-5xl lg:text-7xl">{code}</div>
  )
}

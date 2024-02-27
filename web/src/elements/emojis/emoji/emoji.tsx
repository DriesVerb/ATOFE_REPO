interface EmojiProps {
  code: string
}

export const Emoji = (props: EmojiProps) => {
  const { code } = props

  return (
    <>
      <span>{code}</span>
    </>
  )
}

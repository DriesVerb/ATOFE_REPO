import { Emoji } from "#/elements/emojis/emoji/emoji"

interface EmojiRowProps {
  emojis: string[]
}

import "./emojiRow.css"

export const EmojiRow = (props: EmojiRowProps) => {
  const { emojis } = props

  return (
    <div className="emojiRow-list">
      {emojis?.map((emoji, ind) => {
        return <Emoji key={ind}  code={emoji} />
      })}
    </div>
  )
}

import { Emoji } from "#/elements/emojis/emoji/emoji"

interface EmojiRowProps {
  emojis: string[]
}

import "./emojiRow.css"

export const EmojiRow = (props: EmojiRowProps) => {
  const { emojis } = props

  return (
    <div className="w-min flex gap-4 p-4 bg-slate-100 rounded-2xl">
      {emojis?.map((emoji, ind) => {
        return <Emoji key={ind}  code={emoji} />
      })}
    </div>
  )
}

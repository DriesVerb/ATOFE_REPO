import { Emoji } from "#/elements/emojis/emoji/emoji"
import { EmojiType } from "#/types/global/common"

interface EmojiRowProps {
  emojis: EmojiType[]
}

export const EmojiRow = (props: EmojiRowProps) => {
  const { emojis } = props

  return (
    <div className="w-min bg-secondary rounded-2xl flex gap-2 p-2 sm:gap-3 sm:p-3 md:p-4">
      {emojis?.map((emoji, ind) => {
        return <Emoji key={ind}  code={emoji.character} />
      })}
    </div>
  )
}

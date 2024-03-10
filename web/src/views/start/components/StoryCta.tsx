import { EmojiRow } from '#/components/emojiRow/emojiRow'
import { Btn } from '#/elements'

interface StoryCtaProps {
  emojis: string[]
  classname?: string
  onRenew: () => void
  onWrite: () => void
}

export const StoryCta = (props: StoryCtaProps) => {
  const { emojis, onRenew, onWrite, classname } = props

  return (
    <div className={`flex flex-col items-center gap-4 ${classname}`}>
      <EmojiRow emojis={emojis} />
      <Btn.Group justify="between">
        <Btn.Basic text="randomize" variant="primary" onClick={onRenew} />
        <Btn.Basic text="write story" variant="secondary" onClick={onWrite} />
      </Btn.Group>
    </div>
  )
}

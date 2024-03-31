import { EmojiRow } from '#/components/emojiRow/emojiRow'
import { useGetRanEmojis } from '#/api/emoji/hooks/query/useGetRanEmoji'
import { Btn } from '#/elements'

interface StoryCtaProps {
  classname?: string
}

export const StoryCta = (props: StoryCtaProps) => {
  const { data: emojis, refetch } = useGetRanEmojis(5)
  const { classname } = props
  
  const onRenew = () => refetch()
  const test = () => console.log("test")

  return (
    <div className={`flex flex-col items-center gap-4 ${classname}`}>
      <EmojiRow emojis={emojis} />
      <Btn.Group justify="between">
        <Btn.Basic text="randomize" variant="primary" onClick={onRenew} />
        <Btn.Basic text="write story" variant="secondary" onClick={test} />
      </Btn.Group>
    </div>
  )
}

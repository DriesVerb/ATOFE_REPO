import { EmojiRow } from '#/components/emojiRow/emojiRow'
import { useGetRanEmojis } from '#/api/emoji/hooks/query/useGetRanEmoji'
import { Btn } from '#/elements'
import { useEmojiStore } from '#/store/emoji'
import { navigate } from 'wouter/use-browser-location'

interface StoryCtaProps {
  classname?: string
}

export const StoryCta = (props: StoryCtaProps) => {
  const { classname } = props
  const { data: emojis, refetch } = useGetRanEmojis(5)
  const setEmojis = useEmojiStore((state) => state.setEmojis)

  const onRenew = () => refetch()

  const onHandleWrite = () => {
    setEmojis(emojis)
    navigate("/story/create")
  }

  return (
    <div className={`flex flex-col items-center gap-4 ${classname}`}>
      <EmojiRow emojis={emojis} />
      <Btn.Group justify="between">
        <Btn.Basic text="randomize" variant="primary" onClick={onRenew} />
        <Btn.Basic
          text="write story"
          variant="secondary"
          onClick={onHandleWrite}
        />
      </Btn.Group>
    </div>
  )
}

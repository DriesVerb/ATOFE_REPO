import { EmojiRow } from '#/components/emojiRow/emojiRow'
import { Btn } from '#/elements'
import { navigate } from 'wouter/use-browser-location'
import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { cacheKeys } from '#/utils/const/cacheKeys'
import { EmojiType } from '#/types/global/common'

interface StoryCtaProps {
  navigateTo: string
  classname?: string
}

export const StoryCta = (props: StoryCtaProps) => {
  const { navigateTo,  classname } = props
  const queryClient = useQueryClient()
  const [emojis, setEmojis] = useState(
    queryClient.getQueryData([cacheKeys.emojiRan]) as EmojiType[]
  )

  const onRenew = async () => {
    await queryClient.refetchQueries({ queryKey: [cacheKeys.emojiRan] })
    setEmojis(queryClient.getQueryData([cacheKeys.emojiRan]) as EmojiType[])
  }

  const onHandleWrite = () => {
    navigate(navigateTo)
  }

  console.log(emojis)

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

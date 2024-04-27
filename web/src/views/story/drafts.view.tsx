import { EmojiRow } from '#/components/emojiRow/emojiRow'
import { Btn, Txt } from '#/elements'
import { cacheKeys } from '#/utils/const/cacheKeys'
import { routes } from '#/utils/const/routes'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { navigate } from 'wouter/use-browser-location'

export const DraftsView = () => {
  const queryClient = useQueryClient()
  const [emojis, setEmojis] = useState(
    queryClient.getQueryData([cacheKeys.emojiRan]) as string[]
  )

  const onRenew = async () => {
    await queryClient.refetchQueries({ queryKey: [cacheKeys.emojiRan] })
    setEmojis(queryClient.getQueryData([cacheKeys.emojiRan]) as string[])
  }

  const onWriteHandle = () => {
    navigate(routes.story.create)
  }

  return (
    <>
      <Txt.H1 text="My Drafts" ngclass="col-span-1 md:col-span-5" />
      <section className="col-span-1 md:col-span-2 flex flex-col justify-center">
        <EmojiRow emojis={emojis} />
        <Btn.Group justify="between">
          <Btn.Basic variant="secondary" text="Randomize" onClick={onRenew} />
          <Btn.Basic text="Write Story" onClick={onWriteHandle} />
        </Btn.Group>
      </section>
    </>
  )
}

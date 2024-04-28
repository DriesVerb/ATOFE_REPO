import { Editor } from '#/components/editor/editor'
import { EmojiRow } from '#/components/emojiRow/emojiRow'
import { Txt } from '#/elements'
import { EmojiType } from '#/types/global/common'
import { cacheKeys } from '#/utils/const/cacheKeys'
import { useQueryClient } from '@tanstack/react-query'

const story = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'test sdfjöa, herrooooooo',
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'sdjföas',
        },
      ],
    },
    {
      type: 'paragraph',
    },
    {
      type: 'paragraph',
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'sdfdsafasdf',
        },
      ],
    },
    {
      type: 'paragraph',
    },
    {
      type: 'paragraph',
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'sdfasfasdf',
        },
      ],
    },
    {
      type: 'paragraph',
    },
  ],
}

export const StoryCreate = () => {
  const queryClient = useQueryClient()
  const emojis = queryClient.getQueryData([cacheKeys.emojiRan]) as EmojiType[]
 
  return (
    <>
      <Txt.H2 ngclass="col-span-1 md:col-span-5" text="Title" />
      <section className="col-span-1 md:col-span-5 flex justify-center">
        <EmojiRow emojis={emojis} />
      </section>
      <div className="col-span-1 md:col-span-5">
        <Editor story={story} />
      </div>
    </>
  )
}

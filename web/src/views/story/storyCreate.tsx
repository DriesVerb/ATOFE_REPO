import { Editor } from '#/components/editor/editor'
import { Txt } from '#/elements'

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
  return (
    <>
      <div className="col-span-1 md:col-span-5">
        <Txt.H2 text="Title" />
        <Editor story={story} />
      </div>
    </>
  )
}

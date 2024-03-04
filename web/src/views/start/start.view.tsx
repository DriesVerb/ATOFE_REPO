import { useEmojiSelect } from '#/utils/hooks/openEmoji'
import { Avatar } from '#/components/profile/avatar/avatar'
import { StoryCta } from './components/StoryCta'
import { Form, Txt } from '#/elements'

export const StartView = () => {
  const { emojis, loading, fetchEmojis } = useEmojiSelect()

  if (loading) <div>Loading</div>
  if (emojis?.length === 0) <div>ERROR</div>

  return (
    <>
      <Txt.p className="col-span-4">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</Txt.p>
      <div className="flex gap-4 justify-end col-span-1">
        <Avatar />
      </div>
      <StoryCta
        className="col-span-6"
        emojis={emojis!}
        onRenew={() => fetchEmojis(5)}
        onWrite={() => console.log('dries')}
      />
      <div className="col-span-12 flex flex-col gap-4">
        <Form.Text placeHolder="Name"/>
        <Form.Text type="password" placeHolder="password"/>
        <Form.Text type="email" placeHolder="name@domain.ext"/>
        <Form.Text type="password" placeHolder="repeat password" variant="secondary"/>
      </div>
    </>
  )
}

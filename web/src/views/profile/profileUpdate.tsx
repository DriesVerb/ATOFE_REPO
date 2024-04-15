import { Btn, Form, Ico, Txt } from '#/elements'
import { useGetProfileMe } from '#/api/profile/hooks/query/useProfileMe'
import { Avatar } from '#/components/profile/avatar/avatar'
import { ColorPicker } from '#/components/colorPicker/colorPicker'
import { useState } from 'react'
import { EmojiPicker, PickerEmoji } from '#/components/emojiPicker/emojiPicker'
import { Emoji } from '#/elements/emojis/emoji/emoji'
import { Modal } from '#/components/modal/modal'

export const UpdateProfileView = () => {
  const { data: user, isLoading } = useGetProfileMe()
  const [open, setOpen] = useState(false)
  const [color, setColor] = useState('')
  const [select, setSelect] = useState('')
  const [emoji, setEmoji] = useState<PickerEmoji>()

  if (isLoading) return <div>loading</div>

  const profile = user?.profile

  const { avatar, avatarBg } = profile

  const handleSelect = (avatarOption: string) => {
    setOpen(true)
    setSelect(avatarOption)
  }

  return (
    <>
      <div>
        <Txt.H2 text="Change Avatar" />
        <Avatar avatarBg={avatarBg} avatar={avatar} />
        <p>{emoji?.native}</p>
        <section>
          <Emoji code={avatar} />
          <Btn.Icon onClick={() => handleSelect("avatar")}>
            <Ico.EditGear />
          </Btn.Icon>
        </section>
        <Form.Text label="#1 color" placeholdertext="#ffffff" />
        <Form.Text label="#2 color" placeholdertext="#ffffff" />
        <ColorPicker onPick={setColor} />
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <Modal open={open} setOpen={setOpen}>
        {select === 'avatar' && (
          <div>
            <Emoji code={emoji?.native!} />
              <EmojiPicker onPick={setEmoji} />
          </div>
        )}
      </Modal>
    </>
  )
}

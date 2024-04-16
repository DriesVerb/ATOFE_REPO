import { Btn, Form, Ico, Txt } from '#/elements'
import { useGetProfileMe } from '#/api/profile/hooks/query/useProfileMe'
import { Avatar } from '#/components/profile/avatar/avatar'
import { ColorPicker } from '#/components/colorPicker/colorPicker'
import { useState } from 'react'
import { EmojiPicker, PickerEmoji } from '#/components/emojiPicker/emojiPicker'
import { Emoji } from '#/elements/emojis/emoji/emoji'
import { Modal } from '#/components/modal/modal'
import clsx from 'clsx'

export const UpdateProfileView = () => {
  const { data: user, isLoading } = useGetProfileMe()
  const [open, setOpen] = useState(false)
  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [select, setSelect] = useState('')
  const [emoji, setEmoji] = useState<PickerEmoji>()

  if (isLoading) return <div>loading</div>

  const profile = user?.profile

  const { avatar, avatarBg } = profile

  const handleSelect = (avatarOption: string) => {
    setOpen(true)
    setSelect(avatarOption)
  }

  const classInput1 = clsx(`badge bg-[${avatarBg[1]}]`)
  const classInput2 = clsx(`badge bg-[${avatarBg[0]}]`)

  return (
    <>
      <div>
        <Txt.H2 text="Change Avatar" />
        <Avatar avatarBg={avatarBg} avatar={avatar} />
        <p>{emoji?.native}</p>
        <section>
          <div>
            <Emoji code={avatar} />
          </div>
          <Btn.Icon onClick={() => handleSelect('avatar')}>
            <Ico.EditGear />
          </Btn.Icon>
        </section>
        <section>
          <div className={classInput1}>color 1</div>
          <Btn.Icon onClick={() => handleSelect('color1')}>
            <Ico.EditGear />
          </Btn.Icon>
        </section>
        <section>
          <div className={classInput2}>color 2</div>
          <Btn.Icon onClick={() => handleSelect('color2')}>
            <Ico.EditGear />
          </Btn.Icon>
        </section>
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
        {select === 'color1' && (
          <div>
            <ColorPicker onPick={setColor1} />
          </div>
        )}
        {select === 'color2' && (
          <div>
            <ColorPicker onPick={setColor2} />
          </div>
        )}
      </Modal>
    </>
  )
}

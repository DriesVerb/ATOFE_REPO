import { Btn, Form, Ico, Txt } from '#/elements'
import { useGetProfileMe } from '#/api/profile/hooks/query/useProfileMe'
import { Avatar } from '#/components/profile/avatar/avatar'
import { ColorPicker } from '#/components/colorPicker/colorPicker'
import { useState } from 'react'
import { EmojiPicker, PickerEmoji } from '#/components/emojiPicker/emojiPicker'

export const UpdateProfileView = () => {
  const { data: user, isLoading } = useGetProfileMe()
  const [color, setColor] = useState ("")
  const [emoji, setEmoji] = useState<PickerEmoji>()

  if (isLoading) return <div>loading</div>

  const profile = user?.profile

  const { avatar, avatarBg } = profile

  return (
    <div>
      <Txt.H1 text={color} />
      <Txt.H2 text="Change Avatar" />
      <Avatar avatarBg={avatarBg} avatar={avatar} />
      <p>{emoji?.native}</p>
      <Btn.Icon>
       <Ico.EditGear /> 
      </Btn.Icon>
      <ColorPicker onPick={setColor}/>
      <form>
        <div>{avatar}</div>
        <Form.Text label="#1 color" placeholdertext="#ffffff" />
        <Form.Text label="#2 color" placeholdertext="#ffffff" />
      </form>
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
      <div>
        <EmojiPicker onPick={setEmoji} />
      </div>
    </div>
  )
}

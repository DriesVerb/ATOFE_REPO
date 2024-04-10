import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Form, Txt } from '#/elements'
import { useGetProfileMe } from '#/api/profile/hooks/query/useProfileMe'
import { Avatar } from '#/components/profile/avatar/avatar'

export const UpdateProfileView = () => {
  const { data: user, isLoading } = useGetProfileMe()

  if (isLoading) return <div>loading</div>

  const profile = user?.profile

  const { avatar, avatarBg } = profile

  return (
    <div>
      <Txt.H1 text="here here here" />
      <Txt.H2 text="Change Avatar" />
      <Avatar avatarBg={avatarBg} avatar={avatar} />
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
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div>
        <Picker data={data} onEmojiSelect={console.log} />
      </div>
    </div>
  )
}

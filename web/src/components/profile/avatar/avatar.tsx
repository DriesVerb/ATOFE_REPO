import { Emoji } from '#/elements/emojis/emoji/emoji'

export const Avatar = () => {
  return (
    <div className="avatar">
      <div
        className="w-24 rounded-full border-4 border-primary flex justify-center items-center"
        style={{
          backgroundColor: '#ff006e',
        }}
      >
        <Emoji code="👩🏾‍🤝‍👩🏿" />
      </div>
    </div>
  )
}

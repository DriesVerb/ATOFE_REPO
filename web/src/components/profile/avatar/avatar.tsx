import { Emoji } from '#/elements/emojis/emoji/emoji'

interface AvatarProps {
  avatar: string
  avatarBg: string[]
}

export const Avatar = (props: AvatarProps) => {
  const { avatar, avatarBg } = props

  return (
    <div className="avatar">
      <div
        className="w-10 h-10 sm:w-11 sm:h-11 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border-1 sm:border-2 md:border-2 lg:border-4 flex items-center justify-center border-accent-content overflow-hidden"
        style={{
          background: `linear-gradient(${avatarBg[0]}, ${avatarBg[1]})`,
        }}
      >
        <Emoji code={avatar} />
      </div>
    </div>
  )
}

import { Emoji } from '#/elements/emojis/emoji/emoji'

export const Avatar = () => {
  return (
    <div className="avatar">
      <div
       className="w-10 h-10 sm:w-11 sm:h-11 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border-1 sm:border-2 md:border-2 lg:border-4 flex items-center justify-center border-accent-content overflow-hidden"
        style={{
          background: 'linear-gradient(#8338ec, #3a86ff)',
        }}
      >
        <Emoji code="👨🏽‍❤️‍👨🏾" />
      </div>
    </div>
  )
}

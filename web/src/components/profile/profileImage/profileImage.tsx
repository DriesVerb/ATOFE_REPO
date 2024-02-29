import { Emoji } from "#/elements/emojis/emoji/emoji"

export const ProfileImage = () => {

  return (
    <div className="lg:w-24 lg:h-24 md:w-16 md:h-16 sm:w-10 sm:h-10 flex items-center justify-center border-4 border-black rounded-full overflow-hidden" style={{background: "linear-gradient(#ff006e, #ff006e)"}}>
      <Emoji code="☃️" />
    </div>
  )
}

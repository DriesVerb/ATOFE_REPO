import { Avatar } from '#/components/profile/avatar/avatar'
import { Txt } from '#/elements'
import { StoryCta } from './components/StoryCta'

export const StartView = () => {

  const avatar = '🙀'
  const avatarBG = ['#ffbe0b', '#fb5607']

  return (
    <>
      <StoryCta classname="col-span-1 md:col-span-2" />
      <Txt.P ngclass="col-span-1 md:col-span-2 font-story">
        Lorem ipsum dolor sit amet officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </Txt.P>
      <div className="flex gap-4 justify-end">
        <Avatar avatar={avatar} avatarBg={avatarBG} />
      </div>
    </>
  )
}

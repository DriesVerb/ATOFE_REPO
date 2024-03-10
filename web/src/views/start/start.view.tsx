import { Avatar } from '#/components/profile/avatar/avatar'
import { StoryCta } from './components/StoryCta'
import { Txt } from '#/elements'
import { useGetRanEmojis } from '#/api/emoji/hooks/query/useGetRanEmoji'

export const StartView = () => {
  const { data: emojis, isLoading, refetch } = useGetRanEmojis(5)

  if (isLoading) <div>Loading</div>

  return (
    <>
      <StoryCta
        classname="col-span-1 md:col-span-2"
        emojis={emojis!}
        onRenew={() => refetch()}
        onWrite={() => console.log('dries')}
      />
      <Txt.p className="col-span-1 md:col-span-2">
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
      </Txt.p>
      <div className="flex gap-4 justify-end">
        <Avatar />
      </div>
    </>
  )
}

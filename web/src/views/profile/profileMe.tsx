import { useGetProfileMe } from '#/api/profile/hooks/query/useProfileMe'
import { Avatar } from '#/components/profile/avatar/avatar'
import { Btn, Ico, Link, Txt } from '#/elements'
import { useAuthStore } from '#/store/auth'
import { navigate } from 'wouter/use-browser-location'

export const ProfileMe = () => {
  const username = useAuthStore((state) => state.user)

  const { data: user, isLoading } = useGetProfileMe()

  if (isLoading) return <div>loading</div>

  const profile = user?.profile

  if (!profile || profile === undefined) return <div>error</div>

  const { avatar, avatarBg, bio } = profile

  const editHandler = () => {
    navigate('/profile/update')
  }

  return (
    <div className="col-span-5 flex flex-col gap-y-2 md:gap-y-4">
      <Txt.Small ngclass="self-end">
        <Link.Text href={`/user/profile/${username}`}>
          Public Profile
        </Link.Text>
      </Txt.Small>
      <section className="flex justify-between items-center">
        <Txt.H2 text={username!} />
        <Btn.Icon ngclass={'btn-xs'} onClick={editHandler}>
          <Ico.EditGear />
        </Btn.Icon>
      </section>
      <Avatar avatarBg={avatarBg} avatar={avatar} />
      <Txt.P>{bio}</Txt.P>
    </div>
  )
}

import { useGetProfileMe } from '#/api/profile/hooks/query/useProfileMe'
import { Avatar } from '#/components/profile/avatar/avatar'
import { Txt } from '#/elements'
import { useAuthStore } from '#/store/auth'

export const ProfileMe = () => {
  const user = useAuthStore((state) => state.user)
  
  const { data, isLoading } = useGetProfileMe()

  if (isLoading) <div>loading</div>

  const profile = data.profile

  if (!profile) <div>error</div>

  const { avatar, avatarBg, bio } = profile

  return (
    <div className="max-w-fit bg-red-50">
      <Txt.H2 text={user!} />
      <Avatar avatarBg={avatarBg} avatar={avatar} />
      <Txt.P>{bio}</Txt.P>
    </div>
  )
}

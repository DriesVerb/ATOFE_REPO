import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useGetProfileMe } from '#/api/profile/hooks/query/useProfileMe'
import { Avatar } from '#/components/profile/avatar/avatar'
import { Txt } from '#/elements'
import { useAuthStore } from '#/store/auth'


export const ProfileMe = () => {
  const username = useAuthStore((state) => state.user)
  
  const { data: user, isLoading } = useGetProfileMe()

  if (isLoading) return <div>loading</div>
 
  const profile = user?.profile

  if (!profile || profile === undefined) return <div>error</div>

  const { id, avatar, avatarBg, bio } = profile

  return (
    <div className="col-span-5 bg-sky-50">
      <Txt.H2 text={username!} />
      <Avatar avatarBg={avatarBg} avatar={avatar} />
      <Txt.P>{bio}</Txt.P>
      <div>
        <Picker data={data} onEmojiSelect={console.log} />
      </div>
    </div>
  )
}

import { useGetProfileUsername } from '#/api/user/hooks/query/getProfileUsername'
import { Avatar } from '#/components/profile/avatar/avatar'
import { Txt } from '#/elements'
import { useParams } from 'wouter'

export const ProfileUsernameView = () => {
  const params = useParams()

  const username = params.username

  if (!username) {
    return (
      <div>
        <p>hello</p>
      </div>
    )
  }

  const { data, isLoading } = useGetProfileUsername(username)

  if (isLoading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    )
  }

  const { avatar, avatarBg, bio } = data

  return (
    <div className={"flex flex-col"}>
      <Txt.H1 text={username} />
      <Avatar avatar={avatar} avatarBg={avatarBg} />
      <Txt.Label>Bio:</Txt.Label>
      <Txt.P>{bio}</Txt.P>
    </div>
  )
}

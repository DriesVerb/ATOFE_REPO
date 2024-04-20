import { useGetProfileUsername } from "#/api/user/hooks/query/getProfileUsername"
import { useParams } from "wouter"

export const ProfileUsernameView = () => {
  const params = useParams()

  const username = params.username

  if (!username) {
    return (
    <div><p>hello</p></div>
    )
  }

  const {data} = useGetProfileUsername(username)

  console.log(data)

  return (
    <div>
      <p>hello {username}</p>
    </div>
  )
}

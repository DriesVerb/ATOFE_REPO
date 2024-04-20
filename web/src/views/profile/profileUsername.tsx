import { useParams } from "wouter"

export const ProfileUsernameView = () => {
  const params = useParams()

  const username = params.username

  return (
    <div>
      <p>hello {username}</p>
    </div>
  )
}

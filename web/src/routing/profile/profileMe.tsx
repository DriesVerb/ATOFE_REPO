import { ProfileMe } from "#/views/profile/profileMe"
import { ProtectedRoute } from "../components/protectedRoute"

export const ProfileMeRoute = () => {

  return (
  <ProtectedRoute path="/profile">
      <ProfileMe />
  </ProtectedRoute>
  )
}

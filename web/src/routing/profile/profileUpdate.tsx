import { UpdateProfileView } from '#/views/profile/profileUpdate'
import { ProtectedRoute } from '../components/protectedRoute'

export const ProfileUpdateRoute = () => {
  return (
    <ProtectedRoute path="/profile/update">
      <UpdateProfileView />
    </ProtectedRoute>
  )
}

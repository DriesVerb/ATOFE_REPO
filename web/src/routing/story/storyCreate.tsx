import { StoryCreate } from '#/views/story/storyCreate'
import { ProtectedRoute } from '../components/protectedRoute'

export const StoryCreateRoute = () => {
  return (
    <ProtectedRoute path="/story/create">
      <StoryCreate />
    </ProtectedRoute>
  )
}

import { DraftsView } from '#/views/story/drafts.view'
import { ProtectedRoute } from '../components/protectedRoute'

export const DraftsRoute = () => {
  return (
    <ProtectedRoute path="/story/drafts">
      <DraftsView />
    </ProtectedRoute>
  )
}

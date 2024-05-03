import { StoryByIdView } from "#/views/story/storyById"
import { Route } from "wouter"

export const StoryByIdRoute = () => {
  return (
  <Route path="/stories/:id">
    <StoryByIdView />
  </Route>
  )
}


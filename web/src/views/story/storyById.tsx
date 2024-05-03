import { useGetStoryById } from "#/api/story/hooks/query/useStoryById"
import { EmojiRow } from "#/components/emojiRow/emojiRow"
import { useParams } from "wouter"

export const StoryByIdView = () => {
  const params = useParams()

  const id = params.id

  if (!id) return <div>Error</div>

  const {data, isLoading} = useGetStoryById(Number(id))

  const test = JSON.parse(data.emojis)

  console.log(typeof test)



  return (
    <>
      <div>Hello</div>
      <EmojiRow emojis={test} />
    </>
  )
}

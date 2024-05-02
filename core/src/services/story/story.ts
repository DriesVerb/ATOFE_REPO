import { Story } from "@prisma/client"
import { getPrisma } from "../../databases/prisma"

export const createStory = async (body: any) => {
  const prisma = getPrisma()
  const token = body.token

  const { username } = token

  const { summary, story, title, emojis } = body as Story

  try {
    await prisma.story.create({
      data: {
        author: username,
        title: title,
        emojis: JSON.stringify(emojis),
        summary: summary,
        story: JSON.stringify(story)
      }
    })

  } catch (error) {
    console.log(error)
    throw new Error("Could not create story")
  }


  return { message: 'created story' }
}

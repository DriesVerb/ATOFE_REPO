import { getPrisma } from '../../databases/prisma'
import { logger } from '../../utils/logger'

export const createStory = async (body: any) => {
  const prisma = getPrisma()
  const token = body.token

  const { username } = token

  const { summary, story, title, html, emojis } = body

  try {
    await prisma.story.create({
      data: {
        author: username,
        title: title,
        emojis: {
          connect: emojis,
        },
        summary: summary,
        story: JSON.stringify(story),
        html: html,
      },
    })
  } catch (error) {
    console.log(error)
    throw new Error('Could not create story')
  }

  return { message: 'created story' }
}

export const storyById = async (id: string) => {
  const prisma = getPrisma()

  if (!id) {
    throw new Error('Request did not contain id')
  }

  try {
    const story = await prisma.story.findUnique({
      where: { id: Number(id) },
      include: { emojis: true },
    })
    if (!id) throw new Error('Cannot find story')
    return story
  } catch (error) {
    logger.error(error)
    throw new Error('Cannot find story')
  }
}

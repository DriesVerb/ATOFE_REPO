import { getPrisma } from '../../databases/prisma'
import { emojisRawData } from '../../testData/emoji.data'
import { logger } from '../../utils/logger'

export const SetupEmojis = async () => {
  const prisma = getPrisma()
  const emojis = emojisRawData

  try {
    await prisma.emoji.createMany({
      data: emojis,
    })
  } catch (error) {
    logger.error('Cannot upload all emojis')
    console.log(error)
    throw new Error('could not do all the emojis')
  }

  return { message: 'all emojis recorded' }
}

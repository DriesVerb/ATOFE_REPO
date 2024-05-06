import { getPrisma } from '../../databases/prisma'
import { logger } from '../../utils/logger'

export const findAllEmojis = async () => {
  const prisma = getPrisma()

  const emojis = await prisma.emoji.findMany()

  if (!emojis) {
    logger.error('Could not find Emojis')
    throw new Error('Could not find all emojis')
  }

  return emojis
}

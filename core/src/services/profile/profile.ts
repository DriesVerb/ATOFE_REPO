import { Prisma } from '@prisma/client'
import { getPrisma } from '../../databases/prisma'
import { logger } from '../../utils/logger'

export const meProfile = async (body: any) => {
  const prisma = getPrisma()

  const profile = await prisma.profile.findUnique({
    where: {
      userId: body.token.userId,
    },
  })

  return { profile }
}

export const createProfile = async (body: any) => {
  const prisma = getPrisma()

  const token = body.token

  const { bio, avatar, avatarBg } = body

  try {
    await prisma.profile.create({
      data: {
        bio: bio,
        avatar: avatar,
        avatarBg: avatarBg,
        userId: token.userId,
      },
    })
  } catch (error) {
    console.log(error)
  }

  return { message: 'created profile' }
}

export const updateProfile = async (body: any) => {
  const prisma = getPrisma()

  const { token, bio, avatar, avatarBg } = body

  const { userId } = token

  try {
    await prisma.profile.update({
      where: {
        userId: userId,
      },
      data: {
        bio: bio,
        avatar: avatar,
        avatarBg: avatarBg,
      },
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientValidationError) {
      logger.error('Prisma Validation Error Registering User')
      throw new Error('Registering User Validation Error')
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      logger.error('Prisma Request Error Registering User')
      throw new Error(error.meta?.target + ' already in use')
    }
  }

  return { message: 'Updated Profile' }
}

export const findProfile = async (username: string) => {
  const prisma = getPrisma()

  if (!username) {
    throw new Error('Request did not contain username')
  }

  try {
    const user = await prisma.user.findUnique({ where: { username } })
    if (!user) throw new Error('Cannot find username')
    const profile = prisma.profile.findUnique({ where: { userId: user.id } })
    return profile
  } catch (error) {
    logger.error(error)
  }
}

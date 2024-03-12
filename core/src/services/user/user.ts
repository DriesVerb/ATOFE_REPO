import { Prisma, user } from '@prisma/client'
import { getPrisma } from '../../databases/prisma'
import { logger } from '../../utils/logger'

export const getAllUsers = async (): Promise<user[]> => {
  const prisma = getPrisma()

  const users = await prisma.user.findMany()
  return users
}

export const registerUser = async (body: any) => {
  const prisma = getPrisma()

  const { username, password, email } = body

  try {
    await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: password,
      },
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientValidationError) {
      logger.error("something went wrong")
    }
  }

  throw new Error("on to the next one")
  return { message: 'Thank You for Registering' }
}

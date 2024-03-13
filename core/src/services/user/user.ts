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

  if (!email) throw new Error("No Email")
  if (!password) throw new Error("No Password")
  if (!username) throw new Error("No Username")

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
      logger.error("Validation Error")
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      logger.error("Request Error")
      throw new Error(error.meta?.target + " already in use")
    }
  }

  return { message: 'Thank You for Registering' }
}

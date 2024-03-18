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

  const { username, password, email, confirmEmail, confirmPassword } = body

  if (!email) throw new Error("No Email")
  if (!password) throw new Error("No Password")
  if (!username) throw new Error("No Username")

  if (!confirmEmail) throw new Error("[Warning]: Request outside of client!")
  if (!confirmPassword) throw new Error("[Warning]: Request outside of client!")

  if (confirmPassword !== password) throw new Error("[warning]: request outside of client!")
  if (confirmEmail !== email) throw new Error("[Warning]: Request outside of client!")
 
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
      logger.error("Prisma Validation Error Registering User")
      throw new Error("Registering User Validation Error")
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      logger.error("Prisma Request Error Registering User")
      throw new Error(error.meta?.target + " already in use")
    }
  }

  return { message: 'Thank You for Registering' }
}

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Prisma, user } from '@prisma/client'
import { getPrisma } from '../../databases/prisma'
import { logger } from '../../utils/logger'
import { jwtTokenKey } from '../../utils/dotenv'

export const getAllUsers = async (): Promise<user[]> => {
  const prisma = getPrisma()

  const users = await prisma.user.findMany()
  return users
}

export const registerUser = async (body: any) => {
  const prisma = getPrisma()

  const { username, password, email, confirmEmail, confirmPassword } = body

  if (!email) throw new Error('No Email')
  if (!password) throw new Error('No Password')
  if (!username) throw new Error('No Username')

  if (!confirmEmail) throw new Error('[Warning]: Request outside of client!')
  if (!confirmPassword) throw new Error('[Warning]: Request outside of client!')

  if (confirmPassword !== password)
    throw new Error('[warning]: request outside of client!')
  if (confirmEmail !== email)
    throw new Error('[Warning]: Request outside of client!')

  const cryptedPassword = await bcrypt.hash(password, 10)

  try {
    await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: cryptedPassword,
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

  return { message: 'Thank You for Registering' }
}

export const loginUser = async (body: any) => {
  const prisma = getPrisma()
  const { username, password } = body

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  })

  if (!user) throw new Error('Username does not exist in system')

  const matchPasswords = await bcrypt.compare(password, user?.password)

  if (!matchPasswords) throw new Error('Password does not match')

  const token = jwt.sign(
    {
      userusername: user.username,
      userEmail: user.email,
    },
    jwtTokenKey,
    { expiresIn: '24h' }
  )

  return {
    message: 'Login Succesfull',
    username: user.username,
    token,
  }
}

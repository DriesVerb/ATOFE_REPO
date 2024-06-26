import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Prisma, user } from '@prisma/client'
import { getPrisma } from '../../databases/prisma'
import { logger } from '../../utils/logger'
import { jwtTokenKey } from '../../utils/dotenv'
import { warnOutside } from '../../utils/consts/loggingMessage'
import { getRandomNumChar } from '../emoji/emoji'
import { randomHexColorCode } from '../../utils/helper/hexColor'

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

  if (!confirmEmail) throw new Error(warnOutside)
  if (!confirmPassword) throw new Error(warnOutside)

  if (confirmPassword !== password) throw new Error(warnOutside)
  if (confirmEmail !== email) throw new Error(warnOutside)

  const cryptedPassword = await bcrypt.hash(password, 10)

  let user

  try {
    user = await prisma.user.create({
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

  if (!user) return {message: "No user created"}

  const { id } = user

  const bio = 'New member to the ATOFE community'
  const avatar = getRandomNumChar(1)
  const avatarBg = [randomHexColorCode(), randomHexColorCode()]

  try {
    logger.info("created profile")
    await prisma.profile.create({
      data: {
        bio: bio,
        avatar: avatar[0].character as string,
        avatarBg: avatarBg,
        userId: id,
      },
    })
  } catch (error) {
    logger.info(error)
    throw new Error("Cannot create new profile")
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
      userId: user.id,
      username: user.username,
      email: user.email,
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

export const verifyUser = async (body: any) => {
  const tokenUsername = body.token.username
  const username = body.username

  if (tokenUsername === username) {
    return { username: tokenUsername }
  } else {
    logger.error('Could not verify user')
    throw new Error('Could not verify User')
  }
}

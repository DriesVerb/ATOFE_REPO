import { user } from '@prisma/client'
import { getPrisma } from '../../databases/prisma'

export const getAllUsers = async (): Promise<user[]> => {
  const prisma = getPrisma()

  const users = await prisma.user.findMany()
  return users
}

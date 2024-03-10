import { user } from '@prisma/client'
import { getPrisma } from '../../databases/prisma'

export const getAllUsers = async (): Promise<user[]> => {
  const prisma = getPrisma()

  const users = await prisma.user.findMany()
  return users
}

export const registerUser = async (body: any) => {
  const prisma = getPrisma()

  console.log(body)

  return 'working'
}

import { PrismaClient } from '@prisma/client'

let client: PrismaClient | undefined

export const getPrisma = (): PrismaClient => {
  if (!client) client = new PrismaClient()
  return client
}

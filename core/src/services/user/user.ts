import { user } from '@prisma/client'
import { getPrisma } from '../../databases/prisma'

export const getAllUsers = async (): Promise<user[]> => {
  const prisma = getPrisma()

  const users = await prisma.user.findMany()
  return users
}

export const registerUser = async (body: any) => {
  const prisma = getPrisma()

  const { username, password, email } = body
  
  /*
  try {
    await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: password,
      },
    })
  } catch (error) {
    console.log(error)
  }
  */


  return { message: 'Thank You for Registering' }
}

import { getPrisma } from "../../databases/prisma"

export const createStory = async (body: any) => {
  const prisma = getPrisma()
  const token = body.token

  const { username } = token

  console.log(username)

  return {message: username}
}

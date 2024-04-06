import { getPrisma } from "../../databases/prisma"

export const meProfile = async (body: any) => {
  const prisma = getPrisma()

  console.log(body.token)


  const profile = await prisma.profile.findUnique({
    where: {
      userId: body.token.userId
   }
  })

  return {profile}
}

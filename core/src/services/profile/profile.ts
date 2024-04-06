import { getPrisma } from '../../databases/prisma'

export const meProfile = async (body: any) => {
  const prisma = getPrisma()

  const profile = await prisma.profile.findUnique({
    where: {
      userId: body.token.userId,
    },
  })

  return { profile }
}

export const createProfile = async (body: any) => {
  const prisma = getPrisma()

  const token = body.token

  const { bio, avatar, avatarBg } = body

  try {
    await prisma.profile.create({
      data: {
        bio: bio,
        avatar: avatar,
        avatarBg: avatarBg,
        userId: token.userId,
      },
    })
  } catch (error) {
    console.log(error)
  }

  return { message: 'created profile' }
}

export const updateProfile = async (body: any) => {
  const prisma = getPrisma()

  const { profileId, bio, avatar, avatarBg } = body

  try {
    await prisma.profile.update({
      where: {
        id: profileId
      },
      data: {
        bio: bio,
        avatar: avatar,
        avatarBg: avatarBg,
      },
    })
  } catch (error) {
    console.log(error)
  }

  return { message: 'created profile' }
}

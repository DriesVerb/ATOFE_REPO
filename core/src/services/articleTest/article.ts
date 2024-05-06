/*
import { Emoji } from '@prisma/client'
import { getPrisma } from '../../databases/prisma'

import const CreateArticle = async (body: any) => {
  const prisma = getPrisma()

  const {
    title,
    emoji,
    token: { username },
  } = body

  try {
    await prisma.article.create({
      data: {
        title: title as string,
        author: username,
        emoji: {
          create: emoji,
        },
      },
    })
  } catch (error) {
    console.log(error)
    throw new Error('could not create article')
  }

  return {message: "article created"}
}

export const getArticleById = async (id: string)  => {

  const prisma = getPrisma()

  const article = prisma.article.findUnique({
    where: {id: Number(id)},
    include: {
      emoji: true
    }
  })

  return article

}
*/

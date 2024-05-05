import { RequestHandler } from "express"
import { CreateArticle, getArticleById } from "../../../services/articleTest/article"

export const create: RequestHandler = async (req, res) => {
  const response = await CreateArticle(req.body)
  res.send(response)
}

export const getById: RequestHandler = async (req, res) => {
  const response = await getArticleById(req.params.id)
  res.send(response)
}


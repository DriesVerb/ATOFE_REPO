import { RequestHandler } from "express"
import { logger } from "../../utils/logger"
import { reqHan } from "../../utils/consts/loggingMessage"
import { createStory, storyById } from "../../services/story/story"

export const create: RequestHandler = async (req, res) => {
  logger.info(reqHan('Create story'))
  const result = await createStory(req.body)
  res.send(result)
}

export const getById: RequestHandler = async (req, res) => {
  logger.info(reqHan('Get story by Id'))
  const result = await storyById(req.params.id)
  res.send(result)
}

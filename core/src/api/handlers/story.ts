import { RequestHandler } from "express"
import { logger } from "../../utils/logger"
import { reqHan } from "../../utils/consts/loggingMessage"
import { createStory } from "../../services/story/story"

export const create: RequestHandler = async (req, res) => {
  logger.info(reqHan('Create stroy'))
  const result = await createStory(req.body)
  res.send(result)
}

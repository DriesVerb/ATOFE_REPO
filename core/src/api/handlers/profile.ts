import { RequestHandler } from "express"
import { logger } from "../../utils/logger"
import { reqHan } from "../../utils/consts/loggingMessage"
import { meProfile } from "../../services/profile/profile"

export const me: RequestHandler = async (req, res) => {
  logger.info(reqHan("User profile"))
  const result = await meProfile(req.body)
  res.send(result)
}


export const edit: RequestHandler = async (_req, res) => {
  logger.info(reqHan("Edit profile"))
  res.send("heelo")
}

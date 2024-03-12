import { RequestHandler } from 'express'
import { getRandomNumChar } from '../../services/emoji/emoji'
import { logger } from '../../utils/logger'

export const listRan: RequestHandler = async (req, res) => {
  logger.info(`[Request Handler] Random Emojis amount: ${req.params.amount}`)
  const response = getRandomNumChar(Number(req.params.amount))
  res.send(response)
}

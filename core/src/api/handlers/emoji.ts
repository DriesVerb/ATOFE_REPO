import { RequestHandler } from 'express'
import { getRandomNumChar } from '../../services/emoji/emoji'
import { logger } from '../../utils/logger'
import { reqHan } from '../../utils/consts/loggingMessage'
import {  emojisRawData } from '../../testData/emoji.data'

export const listRan: RequestHandler = async (req, res) => {
  logger.info(reqHan(`Random Emojis amount: ${req.params.amount}`))
  const response = getRandomNumChar(Number(req.params.amount))
  res.send(response)
}

export const testData: RequestHandler = async (_req, res) => {
  const response = emojisRawData
  res.send(response)
}


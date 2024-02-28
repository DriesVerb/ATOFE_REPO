import { RequestHandler } from 'express'
import { getRandomNumChar } from '../../services/emoji/emoji'

export const listRan: RequestHandler = async (req, res) => {
  const response = getRandomNumChar(Number(req.params.amount))
  res.send(response)
}

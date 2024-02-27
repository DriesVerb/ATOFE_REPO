import { RequestHandler } from 'express'
import { getRandomNumChar } from '../../services/emoji/emoji'

export const list5: RequestHandler = async (req, res) => {
  const response = getRandomNumChar(Number(req.params.number))
  res.send(response)
}

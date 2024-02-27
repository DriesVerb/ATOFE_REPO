import { RequestHandler } from 'express'
import { getFiveRandom } from '../../services/emoji/emoji'

export const list5: RequestHandler = async (_req, res) => {
  const response = getFiveRandom()
  res.send(response)
}

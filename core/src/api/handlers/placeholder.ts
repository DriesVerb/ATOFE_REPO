import { RequestHandler } from 'express'

export const placeHolder: RequestHandler = async (_req, res) => {
  res.send('hello')
}

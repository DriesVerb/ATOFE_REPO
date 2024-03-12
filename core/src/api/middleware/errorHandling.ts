import { ErrorRequestHandler } from 'express'
import { logger } from '../../utils/logger'

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  logger.error('Error handling request: ', { error })
  res.status(500).send({ error: 'Error handling request' })
}

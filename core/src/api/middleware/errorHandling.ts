import { ErrorRequestHandler } from 'express'
import { logger } from '../../utils/logger'

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  logger.error(`[Error Handerling request]: ${error.message}`)
  res.status(500).json({error: error.message }).send()
}

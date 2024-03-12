import { RequestHandler } from 'express'

export const asyncHandler: (a: RequestHandler) => RequestHandler =
  (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch((error) => {
      next(error)
    })
  }

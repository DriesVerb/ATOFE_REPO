import jwt from 'jsonwebtoken'
import { RequestHandler } from 'express'
import { logger } from '../../utils/logger'
import { jwtTokenKey } from '../../utils/dotenv'
import { CustomRequest } from '../../types/requests/jwt'

const getAuthToken = (auth: string): string | undefined => {
  if (auth && auth.startsWith('Bearer ')) {
    const token = auth.slice(7)
    return token
  }
}

export const authenticateUser: RequestHandler = async (req, res, next) => {
  logger.info('Authenticating user')
  const authHeader = getAuthToken(req.headers.authorization!)

  if (!authHeader) {
    return res.status(401).send({ message: 'Not authorized' })
  }

  const test = req.headers.authorization

  const token = test!.split(' ')[1]

  let decoded

  try {
    decoded = jwt.verify(token, jwtTokenKey)
  } catch (error) {
    logger.error('cannot verify token')
  }

  if (!decoded) {
    res.status(500).send({ message: 'cannot verify token' })
  }

  ;(req as unknown as CustomRequest).token = decoded!

  next()
}

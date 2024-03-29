import jwt from 'jsonwebtoken'
import { RequestHandler } from 'express'
import { logger } from '../../utils/logger'
import { jwtTokenKey } from '../../utils/dotenv'
import { notAuth, warnOutside } from '../../utils/consts/loggingMessage'

const getAuthToken = (auth: string): string | undefined => {
  if (auth && auth.startsWith('Bearer ')) {
    const token = auth.slice(7)
    return token
  }
}

export const authenticateUser: RequestHandler = async (req, res, next) => {
  logger.info(notAuth)
  const authToken = getAuthToken(req.headers.authorization!)

  if (!authToken) {
    logger.error(notAuth)
    return res.status(401).send({ message: notAuth })
  }

  if (req.body.token?.username) {
    logger.error(warnOutside)
    return res.status(401).send({ message: notAuth })
  }

  let decoded

  try {
    decoded = jwt.verify(authToken, jwtTokenKey)
  } catch (error) {
    logger.error('cannot verify token')
  }

  if (!decoded) {
    res.status(500).send({ message: 'cannot verify token' })
  }

  req.body.token = decoded!
  next()
}

import jwt from 'jsonwebtoken'
import { RequestHandler } from 'express'
import { logger } from '../../utils/logger'
import { jwtTokenKey } from '../../utils/dotenv'
import {
  midMess,
  notAuth,
  warnOutside,
} from '../../utils/consts/loggingMessage'
import { getAuthToken } from '../../utils/helper/auth'

export const authenticateUser: RequestHandler = async (req, res, next) => {
  logger.info(midMess('authenticating user'))
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

  if (!decoded || decoded === undefined) {
    return res.status(401).send({ message: 'cannot verify token' })
  }

  req.body.token = decoded
  next()
}

import { RequestHandler, Request } from "express";
import { logger } from "../../utils/logger";

const getAuthTokenFromHeader = (req: Request): string | undefined => {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7)
  }
}

export const authenticateUser: RequestHandler = (req, res, next) => {
  logger.info("Authenticating user")
  const authToken = req.headers.authorization
  console.log(authToken)
  next()
}

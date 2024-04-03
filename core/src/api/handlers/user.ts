import { RequestHandler } from 'express'
import { getAllUsers, loginUser, registerUser } from '../../services/user/auth'
import { logger } from '../../utils/logger'
import { meProfile } from '../../services/profile/profile'
import { reqHan } from '../../utils/consts/loggingMessage'

export const getAll: RequestHandler = async (_req, res) => {
  logger.info(reqHan("List all users"))
  const response = await getAllUsers()
  res.send(response)
}

export const register: RequestHandler = async (req, res) => {
  logger.info(reqHan("Registering user"))
  const response = await registerUser(req.body)
  res.send(response)
}

export const login: RequestHandler = async (req, res) => {
  logger.info(reqHan("Logging in user"))
  const response = await loginUser(req.body)
  res.send(response)
}

export const me: RequestHandler = async (req, res) => {
  logger.info(reqHan("User profile"))
  const result = await meProfile(req.body)
  res.send(result)
}

export const verify: RequestHandler = async (req, res) => {
  logger.info(reqHan("Verify Token"))
  const result = await meProfile(req.body)
  res.send(result)
}


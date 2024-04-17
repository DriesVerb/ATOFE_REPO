import { RequestHandler } from 'express'
import { getAllUsers, loginUser, registerUser, verifyUser } from '../../services/user/auth'
import { logger } from '../../utils/logger'
import { reqHan } from '../../utils/consts/loggingMessage'
import { findProfile } from '../../services/profile/profile'

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

export const verify: RequestHandler = async (req, res) => {
  logger.info(reqHan("Verify Token"))
  const result = await verifyUser(req.body)
  res.send(result)
}

export const profile: RequestHandler = async (req, res) => {
  logger.info(reqHan("Lookup user profile"))
  const result = await findProfile(req.params.username)
  res.send(result)
}


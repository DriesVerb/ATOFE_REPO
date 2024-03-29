import { RequestHandler } from 'express'
import { getAllUsers, loginUser, registerUser } from '../../services/user/auth'
import { logger } from '../../utils/logger'

export const getAll: RequestHandler = async (_req, res) => {
  const response = await getAllUsers()
  res.send(response)
}

export const register: RequestHandler = async (req, res) => {
  logger.info("[Request Handler] Register User")
  const response = await registerUser(req.body)
  res.send(response)
}

export const login: RequestHandler = async (req, res) => {
  const response = await loginUser(req.body)
  res.send(response)
}

export const me: RequestHandler = async (req, res) => {
  console.log(req)
  res.send("you arrived")
}


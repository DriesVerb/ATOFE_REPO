
import { RequestHandler } from 'express'
import { getAllUsers, registerUser } from '../../services/user/user'

export const getAll: RequestHandler = async (_req, res) => {
  const response = await getAllUsers()
  res.send(response)
}

export const register: RequestHandler = async (req, res) => {
  const response = await registerUser(req.body)
  res.send(response)
}

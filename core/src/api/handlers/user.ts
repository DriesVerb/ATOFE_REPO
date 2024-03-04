
import { RequestHandler } from 'express'
import { getAllUsers } from '../../services/user/user'

export const getAll: RequestHandler = async (_req, res) => {
  const response = await getAllUsers()
  res.send(response)
}

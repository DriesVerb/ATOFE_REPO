import { RequestHandler } from 'express'
import { logger } from '../../utils/logger'
import { reqHan } from '../../utils/consts/loggingMessage'
import { createProfile, meProfile, updateProfile } from '../../services/profile/profile'

export const me: RequestHandler = async (req, res) => {
  logger.info(reqHan('User profile'))
  const result = await meProfile(req.body)
  res.send(result)
}

export const create: RequestHandler = async (req, res) => {
  logger.info(reqHan('create profile'))
  const result = await createProfile(req.body)
  res.send(result)
}

export const update: RequestHandler = async (req, res) => {
  logger.info(reqHan('update profile'))
  const result = await updateProfile(req.body)
  res.send(result)
}

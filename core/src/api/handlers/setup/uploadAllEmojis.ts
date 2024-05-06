import { RequestHandler } from "express"
import { SetupEmojis } from "../../../services/emoji/setup-emojis"
import { findAllEmojis } from "../../../services/emoji/show-all-emojis"

export const allEmojis: RequestHandler = async (_req, res) => {
  const response = await SetupEmojis()
  res.send(response)
}

export const showAllEmojis: RequestHandler = async (_req, res) => {
  const response = await findAllEmojis()
  res.send(response)
}

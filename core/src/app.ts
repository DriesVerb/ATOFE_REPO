import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import * as emoji from './api/handlers/emoji'

import { frontendPort } from './utils/dotenv'

dotenv.config()

export const app: Application = express()

const publicRouter = express.Router()
publicRouter.get('/v1/emoji/random/:number', emoji.list5)

app.use(
  cors({
    origin: [frontendPort],
  })
)

app.use('/public', publicRouter)

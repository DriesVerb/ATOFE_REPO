import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { placeHolder } from './api/handlers/placeholder'
import { frontendPort } from './utils/dotenv'

dotenv.config()

export const app: Application = express()

const publicRouter = express.Router()
publicRouter.get('/v1/placeholder', placeHolder)

app.use(
  cors({
    origin: [frontendPort],
  })
)

app.use('/public', publicRouter)

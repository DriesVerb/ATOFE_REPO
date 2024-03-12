import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import * as emoji from './api/handlers/emoji'
import * as user from './api/handlers/user'

import { frontendPort } from './utils/dotenv'
import { errorHandler } from './api/middleware/errorHandling'
import { asyncHandler } from './utils/asyncHandler'

dotenv.config()

const publicRouter = express.Router()
publicRouter.get('/v1/users/', user.getAll)
publicRouter.post('/v1/user/register', asyncHandler(user.register))
publicRouter.get('/v1/emoji/random/:amount', emoji.listRan)

export const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: [frontendPort],
  })
)
app.use('/public', publicRouter)
app.use(errorHandler)

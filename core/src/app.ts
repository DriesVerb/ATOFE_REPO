import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import * as emoji from './api/handlers/emoji'
import * as user from './api/handlers/user'
import * as profile from './api/handlers/profile'

import { frontendPort } from './utils/dotenv'
import { errorHandler } from './api/middleware/errorHandling'
import { asyncHandler } from './utils/asyncHandler'
import { authenticateUser } from './api/middleware/auth'

dotenv.config()

const publicRouter = express.Router()

publicRouter.get('/v1/users/', user.getAll)
publicRouter.post('/v1/user/register', asyncHandler(user.register))
publicRouter.post('/v1/user/login', asyncHandler(user.login))

publicRouter.get('/v1/emoji/random/:amount', emoji.listRan)

const userRouter = express.Router()
userRouter.use(authenticateUser)
userRouter.get('/v1/profile/me', asyncHandler(profile.me))
userRouter.post('/v1/profile/edit', asyncHandler(profile.edit))
userRouter.post('/v1/verify', asyncHandler(user.verify))

export const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: [frontendPort],
  })
)
app.use('/public', publicRouter)
app.use('/user', userRouter)
app.use(errorHandler)

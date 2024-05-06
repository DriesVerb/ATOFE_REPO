import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import * as user from './api/handlers/user'
import * as emoji from './api/handlers/emoji'
import * as story from './api/handlers/story'
// import * as article from './api/handlers/testArticle/article'
import * as setup from './api/handlers/setup/index'
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
publicRouter.get('/v1/user/profile/:username', asyncHandler(user.profile))

publicRouter.get('/v1/story/:id', asyncHandler(story.getById))

publicRouter.get('/v1/emoji/random/:amount', emoji.listRan)

publicRouter.get('/v1/test/emojis', emoji.testData)

// setup
publicRouter.get('/v1/setup/', asyncHandler(setup.allEmojis))
publicRouter.get('/v1/setup/all', asyncHandler(setup.showAllEmojis))


const userRouter = express.Router()
userRouter.use(authenticateUser)
userRouter.post('/v1/verify', asyncHandler(user.verify))

userRouter.get('/v1/profile/me', asyncHandler(profile.me))
userRouter.post('/v1/profile/create', asyncHandler(profile.create))
userRouter.patch('/v1/profile/update', asyncHandler(profile.update))

userRouter.post('/v1/story/create', asyncHandler(story.create))

// userRouter.post('/v1/test/article/create', article.create)

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

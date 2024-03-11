import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import * as emoji from './api/handlers/emoji'
import * as user from './api/handlers/user'

import { frontendPort } from './utils/dotenv'

dotenv.config()

export const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const publicRouter = express.Router()
publicRouter.get('/v1/users/', user.getAll)
publicRouter.post('/v1/user/register', user.register)
publicRouter.get('/v1/emoji/random/:amount', emoji.listRan)

app.use(
  cors({
    origin: [frontendPort],
  })
)

app.use('/public', publicRouter)

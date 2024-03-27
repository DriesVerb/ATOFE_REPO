import dotenv from 'dotenv'

dotenv.config()

export const frontendPort = process.env.FRONTEND_PORT || ''
export const jwtTokenKey = process.env.JWT_TOKEN || ''

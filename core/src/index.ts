import { app } from './app'
import { logger } from './utils/logger'

const port = process.env.PORT || 8000

const main = async () => {
  app.listen(port, () => {
    logger.info(`Server running at ${port}`)
  })
}

main().catch((error) => {
  logger.error(`Fatal error: ${error}`)
})

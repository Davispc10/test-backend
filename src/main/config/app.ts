import { setupMiddlewares } from '@/main/config/middlewares'
import { setupRoutes } from '@/main/config/routes'

import expres from 'express'

const app = expres()
setupMiddlewares(app)
setupRoutes(app)
export { app }

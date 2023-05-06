import pokemonsRouter from '@/main/routes/pokemons'

import { Router, type Express } from 'express'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  pokemonsRouter(router)
  app.use('/api/v1', router)
}

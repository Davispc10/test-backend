import { makeGetAllPokemonController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'

import { Router } from 'express'
import { makeGetPokemonByIdController } from '../factories/get-pokemon-by-id-controller'

export default (router: Router): void => {
  router.get('/pokemons', adaptRoute(makeGetAllPokemonController()))
  router.get('/pokemons/:id', adaptRoute(makeGetPokemonByIdController()))
}

import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeFindPokemonByIdController, makeListPokemonController } from '@/main/factories/controllers'

import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/pokemons', adapt(makeListPokemonController()))
  router.get('/pokemons/:id', adapt(makeFindPokemonByIdController()))
}

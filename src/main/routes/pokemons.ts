import { makeListPokemonController } from '@/main/factories/controllers'
import { adaptExpressRoute as adapt } from '@/main/adapters'

import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/pokemons', adapt(makeListPokemonController()))
}

import { Router } from 'express'
import { makeFindAllPokemonsController } from '../main/factories/find-all-pokemons-controller.factory'

const pokemonRouters = Router()

pokemonRouters.get('/pokemons', makeFindAllPokemonsController().findAll)

export { pokemonRouters }
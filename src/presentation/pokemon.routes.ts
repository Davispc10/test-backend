import { Router } from 'express'
import { makeFindAllPokemonsController } from '../main/factories/find-all-pokemons-controller.factory'
import { makeFindPokemonByNameOrIdController } from '../main/factories/find-pokemon-by-name-or-id-controller.factory'

const pokemonRouters = Router()

pokemonRouters.get('/pokemons', makeFindAllPokemonsController().findAll)
pokemonRouters.get('/pokemons/search', makeFindPokemonByNameOrIdController().find)

export { pokemonRouters }
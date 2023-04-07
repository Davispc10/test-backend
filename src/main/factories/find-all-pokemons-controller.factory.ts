import { FindAllPokemonsController } from "../../presentation/controllers/pokemon.controller"
import { makeFindAllPokemonsService } from "./find-all-pokemons-service.factory"

export const makeFindAllPokemonsController = () => {
  return new FindAllPokemonsController(makeFindAllPokemonsService())
}
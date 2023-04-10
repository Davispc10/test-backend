import { FindPokemonByNameOrIdController } from "../../presentation/controllers/find-pokemon-by-name-or-id.controller"
import { makeFindPokemonByNameOrIdService } from "./find-pokemon-by-name-or-id-service.factory"

export const makeFindPokemonByNameOrIdController = () => {
  return new FindPokemonByNameOrIdController(makeFindPokemonByNameOrIdService())
}
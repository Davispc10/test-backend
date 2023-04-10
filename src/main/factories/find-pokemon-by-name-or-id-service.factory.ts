import { PokemonRepository } from "../../infra/pokemon.repository"
import { UuidAdapter } from "../../infra/uuid-adapter"
import { FindPokemonByNameOrIdDb } from "../../services/find-pokemon-by-name-or-id.service"

export const makeFindPokemonByNameOrIdService = () => {
  return new FindPokemonByNameOrIdDb(new PokemonRepository(), new PokemonRepository(), new UuidAdapter())
}
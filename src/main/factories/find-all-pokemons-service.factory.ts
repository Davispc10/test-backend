import { PokemonRepository } from "../../infra/pokemon.repository"
import { FindAllPokemonsServiceDb } from "../../services/find-all-pokemons.service"

export const makeFindAllPokemonsService = () => {
  const findAllPokemonsRepository = new PokemonRepository()
  return new FindAllPokemonsServiceDb(findAllPokemonsRepository)
}
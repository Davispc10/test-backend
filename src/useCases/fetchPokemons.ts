import { Pokemon } from "@prisma/client";
import { FiltersData, PokemonsRepository } from "../repositories/pokemonsRepository";

export class FetchPokemonsUseCase {
  constructor(private pokemonsRepository: PokemonsRepository) {}

  async execute({
    name,
    generation,
    page
  }: FiltersData): Promise<Pokemon[]> {
    const pokemons = await this.pokemonsRepository.fetchPokemonByFilters(
      {
        name,
        generation,
        page,
      }
    )

    return pokemons;
  }
}
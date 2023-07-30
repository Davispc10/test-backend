import { GetResult } from "@prisma/client/runtime/library";
import { FiltersData, PokemonsRepository } from "../pokemonsRepository";
import { Pokemon } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class PrismaPokemonsRepository implements PokemonsRepository {
  async fetchPokemonByFilters({
    generation,
    name,
    page
  }: FiltersData): Promise<Pokemon[]> {
    const pokemons = await prisma.pokemon.findMany({
      orderBy: {
        pokedex_number: 'asc',
      },
      where: {
        generation,
        name: {
          contains: name,
        }
      },
      take: 20,
      skip: (page - 1) * 20,
    });

    return pokemons;
  }
}
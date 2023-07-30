import { FiltersData, PokemonsRepository } from "../pokemonsRepository";
import { Pokemon, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";

export class InMemoryPokemonsRepository implements PokemonsRepository{
  public items: Pokemon[] = [];

  async fetchPokemonByFilters(filters: FiltersData): Promise<Pokemon[]> {
    let pokemons = this.items;
    if (filters.generation) {
      pokemons = pokemons.filter((item) => 
        item.generation === filters.generation
      );
    }

    pokemons = pokemons.filter((item) => {
      if (filters.name) {
        if (item.name.includes(filters.name)) {
          return item;
        }
      } else {
        return item;
      }
    });

    return pokemons.slice((filters.page - 1) * 20, filters.page * 20);
  }

  async create(data: Prisma.PokemonCreateInput): Promise<Pokemon> {
    const pokemon = {
      id: randomUUID(),
      generation: data.generation,
      legendary: data.legendary,
      name: data.name,
      pokedex_number: data.pokedex_number ?? this.items.length,
      type_1: data.type_1,
      type_2: data.type_2 ?? "",
    }
    
    this.items.push(pokemon);

    return pokemon;
  }
}
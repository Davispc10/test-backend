import { Pokemon, Prisma } from "@prisma/client";

export interface FiltersData {
  generation?: number;
  name?: string; 
  page: number;
}

export interface PokemonsRepository {
  fetchPokemonByFilters(filters: FiltersData): Promise<Pokemon[]>
  create(data: Prisma.PokemonCreateInput): Promise<Pokemon>
}
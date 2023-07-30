import { Pokemon } from "@prisma/client";

export interface FiltersData {
  generation?: number;
  name?: string; 
  page: number;
}

export interface PokemonsRepository {
  fetchPokemonByFilters(filters: FiltersData): Promise<Pokemon[]>
}
import { Pokemon } from './typeorm/entities/Pokemon';
import IPokemonPaginate from './IPokemonPaginate';
import { IFilters } from './useCases/FindPokemons.use-case';

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IPokemonsRepository {
  create(pokemon: Pokemon): Promise<Pokemon | undefined>;
  findPokemons(
    { page, skip, take }: SearchParams,
    data: IFilters | null,
  ): Promise<Pokemon[] | IPokemonPaginate | null>;
  findByPokedexNumber(
    pokedexNumber: number,
  ): Promise<Pokemon | undefined | null>;
}

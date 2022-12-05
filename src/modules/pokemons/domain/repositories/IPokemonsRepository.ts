import { Pokemon } from '../../infra/typeorm/entities/Pokemon';
import IPokemonPaginate from '../models/IPokemonPaginate';
import { IFilters } from '../../useCases/FindPokemons.use-case';
import { IPokemon } from '../models/IPokemon';

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IPokemonsRepository {
  create(pokemon: Pokemon): Promise<IPokemon>;
  findPokemons(
    { page, skip, take }: SearchParams,
    data: IFilters | null,
  ): Promise<IPokemonPaginate>;
  findByPokedexNumber(pokedexNumber: number): Promise<IPokemon | null>;
}

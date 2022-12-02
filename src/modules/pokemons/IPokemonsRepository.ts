import { Pokemon } from './typeorm/entities/Pokemon';
import { IFilters } from './useCases/FindPokemons.use-case';

export interface IPokemonsRepository {
  create(pokemon: Pokemon): Promise<Pokemon | undefined>;
  findPokemons(data: IFilters | null): Promise<Pokemon[] | null>;
  findByPokedexNumber(
    pokedexNumber: number,
  ): Promise<Pokemon | undefined | null>;
}

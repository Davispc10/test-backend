import { Pokemon } from './typeorm/entities/Pokemon';

export interface IPokemonsRepository {
  create(pokemon: Pokemon): Promise<Pokemon | undefined>;
  findPokemons(data: object | null): Promise<Pokemon[] | null>;
  findByPokedexNumber(
    pokedexNumber: number,
  ): Promise<Pokemon | undefined | null>;
}

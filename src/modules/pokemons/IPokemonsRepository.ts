import { Pokemon } from './typeorm/entities/Pokemon';

export interface IPokemonsRepository {
  create(pokemon: Pokemon): Promise<Pokemon | undefined>;
  findByPokedexNumber(pokedexNumber: number): Promise<Pokemon | null>
}

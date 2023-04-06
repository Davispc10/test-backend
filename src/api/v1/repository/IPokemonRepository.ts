import { PokemonFilter } from '../domain';
import Pokemon from '../entity/Pokemon';

export interface PokemonResult {
  count: number;
  rows: Pokemon[];
}

export default interface IPokemonRepository {
  index(filters: PokemonFilter, page: number, limit: number): Promise<PokemonResult>;
  findById(id: number): Promise<Pokemon>;
  findByName(name: string): Promise<Pokemon>;
}

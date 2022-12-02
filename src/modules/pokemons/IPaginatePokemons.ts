import { Pokemon } from './typeorm/entities/Pokemon';

export interface IPaginatePokemons {
  per_page: number,
  total: number,
  current_page: number,
  data: Pokemon[],
}

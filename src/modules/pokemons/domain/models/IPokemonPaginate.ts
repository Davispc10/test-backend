import { Pokemon } from '../../infra/typeorm/entities/Pokemon';

export default interface IPokemonPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: Pokemon[];
}

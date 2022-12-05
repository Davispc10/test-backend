import { IPokemon } from './IPokemon';

export default interface IPokemonPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: IPokemon[] | null;
}

import { PaginationQueryDto } from '../../../../@shared/dto/validation-query.dto';
import Pokemon from '../../../domain/entity/pokemon';

export const LIST_POKEMONS_USE_CASE = 'LIST_POKEMONS_USE_CASE';
export interface ListPokemonsUseCase {
  execute(paginationQuery: PaginationQueryDto): Promise<Pokemon[]>;
}

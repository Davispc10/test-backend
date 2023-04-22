import { PaginationQueryDto } from '../../../../@shared/dto/validation-query.dto';
import Pokemon from '../../../domain/entity/pokemon';

export const LIST_POKEMONS_PORT = 'LIST_POKEMONS_PORT';
export interface ListPokemonsPort {
  execute(paginationQuery: PaginationQueryDto): Promise<Pokemon[]>;
}

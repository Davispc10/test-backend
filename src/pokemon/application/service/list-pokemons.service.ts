import { Inject } from '@nestjs/common';
import {
  LIST_POKEMONS_PORT,
  ListPokemonsPort,
} from '../ports/out/list-pokemons.port';
import { ListPokemonsUseCase } from '../ports/in/list-pokemons.usecase';
import Pokemon from '../../domain/entity/pokemon';
import { PaginationQueryDto } from '../../../@shared/dto/validation-query.dto';

export class ListPokemonsService implements ListPokemonsUseCase {
  public constructor(
    @Inject(LIST_POKEMONS_PORT)
    private readonly listPokemonsPort: ListPokemonsPort,
  ) {}

  execute(paginationQuery: PaginationQueryDto): Promise<Pokemon[]> {
    return this.listPokemonsPort.execute(paginationQuery);
  }
}

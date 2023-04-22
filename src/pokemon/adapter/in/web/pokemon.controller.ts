import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  LIST_POKEMONS_USE_CASE,
  ListPokemonsUseCase,
} from '../../../application/ports/in/list-pokemons.usecase';
import {
  IMPORT_POKEMONS_USE_CASE,
  ImportPokemonsUseCase,
} from '../../../application/ports/in/import-pokemons.usecase';
import { ImportPokemonsSummaryResponse } from './dto/import-pokemons-summary.response';
import { GetPokemonsResponse } from './dto/get-pokemons.response';
import { PaginationQueryDto } from '../../../../@shared/dto/validation-query.dto';

@Controller('pokemons')
export class PokemonController {
  public constructor(
    @Inject(LIST_POKEMONS_USE_CASE)
    private readonly listPokemonsUseCase: ListPokemonsUseCase,
    @Inject(IMPORT_POKEMONS_USE_CASE)
    private readonly importPokemonsUseCase: ImportPokemonsUseCase,
  ) {}

  @Get('/import')
  public async importer(): Promise<ImportPokemonsSummaryResponse> {
    return this.importPokemonsUseCase.execute();
  }

  @Get()
  public async getPokemons(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<GetPokemonsResponse[]> {
    const pokemons = await this.listPokemonsUseCase.execute(paginationQuery);
    return pokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      pokedexId: pokemon.pokedexId,
      generation: pokemon.generation,
      evolutionStage: pokemon.evolutionStage,
      evolved: pokemon.evolved,
      familyId: pokemon.familyId,
      type1: pokemon.type1,
      type2: pokemon.type2,
      weather1: pokemon.weather1,
      weather2: pokemon.weather2,
      statTotal: pokemon.statTotal,
      atk: pokemon.atk,
      def: pokemon.def,
      sta: pokemon.sta,
    }));
  }
}

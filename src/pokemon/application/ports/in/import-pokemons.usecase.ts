import { ImportPokemonsSummaryResponse } from '../../../adapter/in/web/dto/import-pokemons-summary.response';

export const IMPORT_POKEMONS_USE_CASE = 'IMPORT_POKEMONS_USE_CASE';
export interface ImportPokemonsUseCase {
  execute(): Promise<ImportPokemonsSummaryResponse>;
}

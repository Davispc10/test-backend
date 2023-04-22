import { Inject } from '@nestjs/common';
import {
  SAVE_POKEMONS_PORT,
  SavePokemonsPort,
} from '../ports/out/save-pokemons.port';
import { ImportPokemonsUseCase } from '../ports/in/import-pokemons.usecase';
import {
  LOAD_POKEMONS_PORT,
  LoadPokemonsPort,
} from '../ports/out/load-pokemons.port';
import {
  PARSER_POKEMONS_PORT,
  ParserPokemonsPort,
} from '../ports/out/parser-pokemons.port';
import { ImportPokemonsSummaryResponse } from '../../adapter/in/web/dto/import-pokemons-summary.response';

export class ImportPokemonsService implements ImportPokemonsUseCase {
  public constructor(
    @Inject(SAVE_POKEMONS_PORT)
    private readonly savePokemonsPort: SavePokemonsPort,
    @Inject(LOAD_POKEMONS_PORT)
    private readonly loadPokemonsPort: LoadPokemonsPort,
    @Inject(PARSER_POKEMONS_PORT)
    private readonly parserPokemonsPort: ParserPokemonsPort,
  ) {}

  async execute(): Promise<ImportPokemonsSummaryResponse> {
    const pokemonsDataLoaded = await this.loadPokemonsPort.execute();
    const pokemons = this.parserPokemonsPort.execute(pokemonsDataLoaded);
    await this.savePokemonsPort.execute(pokemons);
    return {
      importedItens: pokemons.length,
    };
  }
}

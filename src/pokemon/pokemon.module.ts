import { Module } from '@nestjs/common';
import { PokemonController } from './adapter/in/web/pokemon.controller';
import { ListPokemonsService } from './application/service/list-pokemons.service';
import { LIST_POKEMONS_USE_CASE } from './application/ports/in/list-pokemons.usecase';
import { LIST_POKEMONS_PORT } from './application/ports/out/list-pokemons.port';
import { ListPokemonsPersistenceAdapter } from './adapter/out/persistence/list-pokemons.persistence.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './adapter/out/persistence/entity/pokemon.entity';
import { IMPORT_POKEMONS_USE_CASE } from './application/ports/in/import-pokemons.usecase';
import { SavePokemonsPersistenceAdapter } from './adapter/out/persistence/save-pokemons.persistence.adapter';
import { SAVE_POKEMONS_PORT } from './application/ports/out/save-pokemons.port';
import { ImportPokemonsService } from './application/service/import-pokemons.service';
import { FileSystem } from '../@shared/file-system/file-system';
import { PARSER_POKEMONS_PORT } from './application/ports/out/parser-pokemons.port';
import { PokemonExcelParser } from './adapter/out/persistence/parser/pokemon-excel-parser';
import { LOAD_POKEMONS_PORT } from './application/ports/out/load-pokemons.port';
import { LoadPokemonsExcelAdapter } from './adapter/out/file/load-pokemons.excel.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity])],
  controllers: [PokemonController],
  providers: [
    FileSystem,
    {
      provide: LIST_POKEMONS_USE_CASE,
      useClass: ListPokemonsService,
    },
    {
      provide: LIST_POKEMONS_PORT,
      useClass: ListPokemonsPersistenceAdapter,
    },
    {
      provide: IMPORT_POKEMONS_USE_CASE,
      useClass: ImportPokemonsService,
    },
    {
      provide: SAVE_POKEMONS_PORT,
      useClass: SavePokemonsPersistenceAdapter,
    },
    {
      provide: PARSER_POKEMONS_PORT,
      useClass: PokemonExcelParser,
    },
    {
      provide: LOAD_POKEMONS_PORT,
      useClass: LoadPokemonsExcelAdapter,
    },
  ],
})
export class PokemonModule {}

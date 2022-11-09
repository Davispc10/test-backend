import { Module } from '@nestjs/common';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { _2022310979320001_addFullPokedexToDatabase } from './2022310979320001_addFullPokedexToDatabase.service';
import { SeederController } from './seeds.controller';
import { SeederService } from './seeds.service';

// # seeds

//Migrations

@Module({
  imports: [PokemonModule],
  controllers: [SeederController],
  providers: [_2022310979320001_addFullPokedexToDatabase, SeederService],
  exports: [_2022310979320001_addFullPokedexToDatabase],
})
export class SeedsModule {}

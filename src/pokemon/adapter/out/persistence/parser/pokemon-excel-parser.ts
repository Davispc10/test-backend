import { PokemonTypeMapper } from '../mapper/pokemon-type.mapper';
import { PokemonWeatherMapper } from '../mapper/pokemon-weather.mapper';
import { PokemonEvolutionStage } from '../mapper/pokemon-evolution-stage.mapper';
import FamilyId from '../../../../domain/entity/family-id';
import Pokemon from '../../../../domain/entity/pokemon';
import PokemonId from '../../../../domain/entity/pokemon-id';
import PokedexId from '../../../../domain/entity/pokedex-id';
import PokemonType from '../../../../domain/entity/pokemon-type';
import PokemonWeather from '../../../../domain/entity/pokemon-weather';
import PokemonStat from '../../../../domain/entity/pokemon-stat';
import { Injectable } from '@nestjs/common';
import { ParserPokemonsPort } from '../../../../application/ports/out/parser-pokemons.port';

@Injectable()
export class PokemonExcelParser implements ParserPokemonsPort {
  public execute(data: unknown[]): Pokemon[] {
    return data.map((row) => {
      const id = new PokemonId(row['Row']);
      const name = row['Name'];
      const pokedexId = new PokedexId(row['Pokedex Number']);
      const generation = row['Generation'];
      const evolutionStage = PokemonEvolutionStage.map(row['Evolution Stage']);
      const envolved = !!row['Evolved'];
      const familyId = new FamilyId(row['FamilyID']);

      const type1Mapped = PokemonTypeMapper.map(row['Type 1']);
      const type1 = new PokemonType(type1Mapped);

      const type2Mapped = PokemonTypeMapper.map(row['Type 2']);
      const type2 = new PokemonType(type2Mapped);

      const weather1Mapped = PokemonWeatherMapper.map(row['Weather 1']);
      const weather1 = new PokemonWeather(weather1Mapped);

      const weather2Mapped = PokemonWeatherMapper.map(row['Weather 2']);
      const weather2 = new PokemonWeather(weather2Mapped);

      const statTotal = new PokemonStat(row['STAT TOTAL']);
      const atk = new PokemonStat(row['ATK']);
      const def = new PokemonStat(row['DEF']);
      const sta = new PokemonStat(row['STA']);
      return new Pokemon(
        id,
        name,
        pokedexId,
        generation,
        evolutionStage,
        envolved,
        familyId,
        type1,
        type2,
        weather1,
        weather2,
        statTotal,
        atk,
        def,
        sta,
      );
    });
  }
}

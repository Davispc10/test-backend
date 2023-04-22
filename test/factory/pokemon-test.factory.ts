import { CheckUndefinedOrReturnValue } from '../../src/@shared/utils/check-undefined-or-return-value';
import FamilyId from '../../src/pokemon/domain/entity/family-id';
import PokedexId from '../../src/pokemon/domain/entity/pokedex-id';
import Pokemon from '../../src/pokemon/domain/entity/pokemon';
import { PokemonEvolutionStageEnum } from '../../src/pokemon/domain/entity/pokemon-evolution-stage.enum';
import { PokemonGenerationEnum } from '../../src/pokemon/domain/entity/pokemon-generation.enum';
import PokemonId from '../../src/pokemon/domain/entity/pokemon-id';
import PokemonStat from '../../src/pokemon/domain/entity/pokemon-stat';
import PokemonType from '../../src/pokemon/domain/entity/pokemon-type';
import { PokemonTypeEnum } from '../../src/pokemon/domain/entity/pokemon-type.enum';
import PokemonWeather from '../../src/pokemon/domain/entity/pokemon-weather';
import { PokemonWeatherEnum } from '../../src/pokemon/domain/entity/pokemon-weather.enum';
import { PokemonIdTestFactory } from './pokemon-id-test.factory';

// TODO: Finish Pokemon Test Factory
export class PokemonTestFactory {
  static validPokemonId = PokemonIdTestFactory.create();
  static create(
    param: {
      id?: PokemonId;
    } = {},
  ): Pokemon {
    const pokemonId = CheckUndefinedOrReturnValue.check(
      param.id,
      this.validPokemonId,
    );

    return new Pokemon(
      pokemonId,
      '',
      new PokedexId(1),
      PokemonGenerationEnum.GEN1,
      PokemonEvolutionStageEnum.EVOLVED,
      true,
      new FamilyId(1),
      new PokemonType(PokemonTypeEnum.BUG),
      new PokemonType(PokemonTypeEnum.BUG),
      new PokemonWeather(PokemonWeatherEnum.CLOUDY),
      new PokemonWeather(PokemonWeatherEnum.CLOUDY),
      new PokemonStat(1),
      new PokemonStat(1),
      new PokemonStat(1),
      new PokemonStat(1),
    );
  }
}

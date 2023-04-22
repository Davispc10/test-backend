import { PokemonTypeEnum } from '../../../../domain/entity/pokemon-type.enum';

export class PokemonTypeMapper {
  public static map(value: string): PokemonTypeEnum {
    const myMap = new Map<string, PokemonTypeEnum>([
      ['bug', PokemonTypeEnum.BUG],
      ['dark', PokemonTypeEnum.DARK],
      ['dragon', PokemonTypeEnum.DRAGON],
      ['electric', PokemonTypeEnum.ELECTRIC],
      ['fairy', PokemonTypeEnum.FAIRY],
      ['fighting', PokemonTypeEnum.FIGHTING],
      ['fire', PokemonTypeEnum.FIRE],
      ['flying', PokemonTypeEnum.FLYING],
      ['ghost', PokemonTypeEnum.GHOST],
      ['grass', PokemonTypeEnum.GRASS],
      ['ground', PokemonTypeEnum.GROUND],
      ['ice', PokemonTypeEnum.ICE],
      ['normal', PokemonTypeEnum.NORMAL],
      ['poison', PokemonTypeEnum.POISON],
      ['psychic', PokemonTypeEnum.PSYCHIC],
      ['rock', PokemonTypeEnum.ROCK],
      ['steel', PokemonTypeEnum.STEEL],
      ['water', PokemonTypeEnum.WATER],
      [undefined, PokemonTypeEnum.NONE],
    ]);
    return myMap.get(value);
  }
}

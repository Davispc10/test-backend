import { PokemonEvolutionStageEnum } from '../../../../domain/entity/pokemon-evolution-stage.enum';

export class PokemonEvolutionStage {
  public static map(value: string | number): PokemonEvolutionStageEnum {
    const myMap = new Map<string | number, PokemonEvolutionStageEnum>([
      [0, PokemonEvolutionStageEnum.ZERO],
      [1, PokemonEvolutionStageEnum.ONE],
      [2, PokemonEvolutionStageEnum.TWO],
      [3, PokemonEvolutionStageEnum.THREE],
      ['Evolved', PokemonEvolutionStageEnum.EVOLVED],
      ['Lower', PokemonEvolutionStageEnum.LOWER],
      [undefined, PokemonEvolutionStageEnum.NONE],
    ]);

    return myMap.get(value);
  }
}

import { CheckUndefinedOrReturnValue } from '../../src/@shared/utils/check-undefined-or-return-value';
import PokemonId from '../../src/pokemon/domain/entity/pokemon-id';

export class PokemonIdTestFactory {
  static validPokemonId = 12;
  static create(value?: string): PokemonId {
    const pokemonId = CheckUndefinedOrReturnValue.check(
      value,
      this.validPokemonId,
    );
    return new PokemonId(pokemonId);
  }
}

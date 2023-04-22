import { PokemonIdTestFactory } from '../../../../test/factory/pokemon-id-test.factory';

describe('PokemonId', () => {
  describe('it should instantiate a valid externalId', () => {
    it('when id is valid', () => {
      const pokemonId = PokemonIdTestFactory.create();
      expect(pokemonId).toBeDefined();
      expect(pokemonId.value).toBe(PokemonIdTestFactory.validPokemonId);
    });
  });

  describe('it should trown an exception', () => {
    it('when id is null', () => {
      const invalidId = null;
      expect(() => PokemonIdTestFactory.create(invalidId)).toThrow(
        new Error('Invalid Pokemon Id'),
      );
    });
  });
});

const pokemonParser = require('./pokemonParser');

describe('pokemonParser function tests', () => {
  it('should return null if object was invalid', () => {
    const parsedPokemon = pokemonParser();

    expect(parsedPokemon).toBe(null);
  });
});

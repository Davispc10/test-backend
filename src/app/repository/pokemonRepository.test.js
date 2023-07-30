const sinon = require('sinon');

const PokemonModel = require('../models/pokemon');
const PokemonRepository = require('./pokemonRepository');
const pokemonMockPayload = require('../../utils/pokemonMockPayload.json');

describe('pokemonRepository test suite', () => {
  it('should retrieve a list of pokemons from database', async () => {
    const stub = sinon.stub(PokemonModel, 'findAndCountAll').returns(pokemonMockPayload);
    const pokemonRepository = new PokemonRepository();
    const pokemons = await pokemonRepository.findAll(1, 5);

    expect(stub.calledOnce).toBe(true);
    expect(pokemons.length).toBe(2);
    expect(pokemons[0]).toEqual(pokemonMockPayload[0]);
    expect(pokemons[1]).toEqual(pokemonMockPayload[1]);
  });
});

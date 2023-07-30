const sinon = require('sinon');

const PokemonModel = require('../models/pokemon');
const PokemonRepository = require('./pokemonRepository');

const stubValue = [
  {
    id: 6,
    name: 'Charizard',
    pokedexNumber: 6,
  },
  {
    id: 7,
    name: 'Squirtle',
    pokedexNumber: 7,
  },
];

describe('pokemonRepository test suite', () => {
  it('should retrieve pokemons from database', async () => {
    const stub = sinon.stub(PokemonModel, 'findAndCountAll').returns(stubValue);
    const pokemonRepository = new PokemonRepository();
    const pokemons = await pokemonRepository.findAll(1, 5);

    expect(stub.calledOnce).toBe(true);
    expect(pokemons.length).toBe(2);
    expect(pokemons[0].id).toBe(6);
    expect(pokemons[0].name).toBe('Charizard');
    expect(pokemons[0].pokedexNumber).toBe(6);
    expect(pokemons[1].id).toBe(7);
    expect(pokemons[1].name).toBe('Squirtle');
    expect(pokemons[1].pokedexNumber).toBe(7);
  });
});

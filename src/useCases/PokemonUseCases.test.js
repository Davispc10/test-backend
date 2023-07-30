const sinon = require('sinon');

const PokemonRepository = require('../repository/pokemonRepository');
const PokemonUseCases = require('./PokemonUseCases');

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

describe('ListPokemon use case test suite', () => {
  it('should retrieve pokemons from database', async () => {
    const pokemonRepository = new PokemonRepository();
    const stub = sinon.stub(pokemonRepository, 'findAll').returns(stubValue);
    const pokemonListUseCase = new PokemonUseCases(pokemonRepository);
    const pokemons = await pokemonListUseCase.findAll(1, 5);

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

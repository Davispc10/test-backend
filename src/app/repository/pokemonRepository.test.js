const sinon = require('sinon');

const PokemonModel = require('../models/pokemon');
const PokemonRepository = require('./pokemonRepository');
const pokemonMockPayload = require('../../utils/pokemonMockPayload.json');

const stub = sinon.stub(PokemonModel, 'findAndCountAll').returns(pokemonMockPayload);
const pokemonRepository = new PokemonRepository();

describe('pokemonRepository test suite', () => {
  describe('findAll', () => {
    it('should retrieve a list of pokemons from database', async () => {
      const pokemons = await pokemonRepository.findAll(1, 5);
  
      expect(stub.callCount).toBe(1);
      expect(pokemons.length).toBe(2);
      expect(pokemons[0]).toEqual(pokemonMockPayload[0]);
      expect(pokemons[1]).toEqual(pokemonMockPayload[1]);
    });

    it('should retrieve a list of pokemons from database with filter', async () => {
      const pokemons = await pokemonRepository.findAll(1, 5, { evolved: true });
  
      expect(stub.callCount).toBe(2);
      expect(pokemons.length).toBe(2);
      expect(pokemons[0]).toEqual(pokemonMockPayload[0]);
      expect(pokemons[1]).toEqual(pokemonMockPayload[1]);
    });
  });

  describe('findById', () => {
    it('should retrieve pokemon by ID', async () => {
      const stub2 = sinon.stub(PokemonModel, 'findOne').returns(pokemonMockPayload[0]);
      const pokemonRepository2 = new PokemonRepository();
      const pokemon = await pokemonRepository2.findById(1);
  
      expect(stub2.calledOnce).toBe(true);
      expect(pokemon).toEqual(pokemonMockPayload[0]);
    });
  });
});

const sinon = require('sinon');
const PokemonUseCases = require('../useCases/PokemonUseCases');
const PokemonController = require('./pokemonController');

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

describe('PokemonController test suite', () => {
  let status, json, res;

  beforeEach(() => {
    status = sinon.stub();
    json = sinon.spy();
    res = { json, status };
    status.returns(res);
  });

  it('Should return 400 bad request if page param was not provided', async () => {
    const req = { query: { pageSize: 1 } };

    await new PokemonController().getAll(req, res);
    expect(status.args[0][0]).toBe(400);
    expect(json.args[0][0].error).toBe('"page" is required');
  });

  it('Should return 400 bad request if pageSize param was not provided', async () => {
    const req = { query: { page: 1 } };

    await new PokemonController().getAll(req, res);
    expect(status.args[0][0]).toBe(400);
    expect(json.args[0][0].error).toBe('"pageSize" is required');
  });

  it('Should return 400 bad request if page param was invalid', async () => {
    const req = { query: { page: 'dfsdf', pageSize: 5 } };

    await new PokemonController().getAll(req, res);
    expect(status.args[0][0]).toBe(400);
    expect(json.args[0][0].error).toBe('"page" must be a number');
  });

  it('Should return 400 bad request if page param was invalid', async () => {
    const req = { query: { page: 1, pageSize: 'teste' } };

    await new PokemonController().getAll(req, res);
    expect(status.args[0][0]).toBe(400);
    expect(json.args[0][0].error).toBe('"pageSize" must be a number');
  });

  it('Should return 400 bad request if page param was smaller than 1', async () => {
    const req = { query: { page: 0, pageSize: 5 } };

    await new PokemonController().getAll(req, res);
    expect(status.args[0][0]).toBe(400);
    expect(json.args[0][0].error).toBe(
      '"page" must be greater than or equal to 1'
    );
  });

  it('Should return 400 bad request if page param was smaller than 1', async () => {
    const req = { query: { page: 2, pageSize: 0 } };

    await new PokemonController().getAll(req, res);
    expect(status.args[0][0]).toBe(400);
    expect(json.args[0][0].error).toBe(
      '"pageSize" must be greater than or equal to 1'
    );
  });

  it('Should return 400 bad request if a non permited query param was provided', async () => {
    const req = { query: { page: 1, pageSize: 5, notPermitedParam: 1 } };

    await new PokemonController().getAll(req, res);
    expect(status.args[0][0]).toBe(400);
    expect(json.args[0][0].error).toBe('"notPermitedParam" is not allowed');
  });

  it('should return 200 with payload', async () => {
    const req = { query: { page: 1, pageSize: 5 } };

    const pokemonRepository = sinon.spy();
    const pokemonListUseCase = new PokemonUseCases(pokemonRepository);
    const stub = sinon.stub(pokemonListUseCase, 'findAll').returns(stubValue);
    const pokemonController = new PokemonController(pokemonListUseCase);

    await pokemonController.getAll(req, res);

    expect(stub.calledOnce).toBe(true);
    expect(status.args[0][0]).toBe(200);
  });
});

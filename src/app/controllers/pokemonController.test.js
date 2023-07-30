const sinon = require('sinon');
const PokemonUseCases = require('../useCases/PokemonUseCases');
const PokemonController = require('./pokemonController');
const pokemonMockPayload = require('../../utils/pokemonMockPayload.json');

describe('PokemonController test suite', () => {
  describe('getAll', () => {
    let status, json, res;

    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    });

    it('should return 400 bad request if page param is not provided', async () => {
      const req = { query: { pageSize: 1 } };

      await new PokemonController().getAll(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe('"page" is required');
    });

    it('should return 400 bad request if pageSize param is not provided', async () => {
      const req = { query: { page: 1 } };

      await new PokemonController().getAll(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe('"pageSize" is required');
    });

    it('should return 400 bad request if page param is invalid', async () => {
      const req = { query: { page: 'dfsdf', pageSize: 5 } };

      await new PokemonController().getAll(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe('"page" must be a number');
    });

    it('should return 400 bad request if page param is invalid', async () => {
      const req = { query: { page: 1, pageSize: 'teste' } };

      await new PokemonController().getAll(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe('"pageSize" must be a number');
    });

    it('should return 400 bad request if page param is smaller than 1', async () => {
      const req = { query: { page: 0, pageSize: 5 } };

      await new PokemonController().getAll(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe(
        '"page" must be greater than or equal to 1'
      );
    });

    it('should return 400 bad request if page param is smaller than 1', async () => {
      const req = { query: { page: 2, pageSize: 0 } };

      await new PokemonController().getAll(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe(
        '"pageSize" must be greater than or equal to 1'
      );
    });

    it('should return 400 bad request if a non permited query param is provided', async () => {
      const req = { query: { page: 1, pageSize: 5, notPermitedParam: 1 } };

      await new PokemonController().getAll(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe('"notPermitedParam" is not allowed');
    });

    it('should return 200 with payload', async () => {
      const req = { query: { page: 1, pageSize: 5 } };

      const pokemonRepository = sinon.spy();
      const pokemonListUseCase = new PokemonUseCases(pokemonRepository);
      const stub = sinon
        .stub(pokemonListUseCase, 'findAll')
        .returns(pokemonMockPayload);
      const pokemonController = new PokemonController(pokemonListUseCase);

      await pokemonController.getAll(req, res);

      expect(stub.calledOnce).toBe(true);
      expect(status.args[0][0]).toBe(200);
    });
  });

  describe('getByPokemonId', () => {
    let status, json, res;

    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    });

    it('should return 400 bad request if pokemonId param is not provided', async () => {
      const req = { params: { invalidParam: 1 } };

      await new PokemonController().getByPomekonId(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe('"pokemonId" is required');
    });

    it('should return 400 bad request if pokemonId param is invalid', async () => {
      const req = { params: { pokemonId: 'invalid' } };

      await new PokemonController().getByPomekonId(req, res);
      expect(status.args[0][0]).toBe(400);
      expect(json.args[0][0].error).toBe('"pokemonId" must be a number');
    });

    it('should return 200 with payload', async () => {
      const req = { params: { pokemonId: 1 } };

      const pokemonRepository = sinon.spy();
      const pokemonListUseCase = new PokemonUseCases(pokemonRepository);
      const stub = sinon
        .stub(pokemonListUseCase, 'findById')
        .returns(pokemonMockPayload[0]);
      const pokemonController = new PokemonController(pokemonListUseCase);

      await pokemonController.getByPomekonId(req, res);

      expect(stub.calledOnce).toBe(true);
      expect(status.args[0][0]).toBe(200);
    });
  });
});

const { StatusCodes } = require('http-status-codes');
const {
  pokemonListSchema,
  pokemonByIdSchema,
} = require('../schemas/pokemonSchemas');
const generatePagination = require('../../utils/pagination');

class PokemonController {
  constructor(pokemonUseCases) {
    this.pokemonUseCases = pokemonUseCases;
    this.getAll = this.getAll.bind(this);
    this.getByPomekonId = this.getByPomekonId.bind(this);
  }

  async getAll(req, res) {
    try {
      const { error, value: filters } = pokemonListSchema.validate(req.query);

      if (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
      } else {
        const { page, pageSize } = req.query;
        const { count: totalItems, rows } = await this.pokemonUseCases.findAll(
          filters
        );

        const responsePayload = {
          ...generatePagination(totalItems, page, pageSize),
          data: rows,
        };

        res.status(StatusCodes.OK).json(responsePayload);
      }
    } catch (err) {
      console.error(err);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Error retrieving pokemons' });
    }
  }

  async getByPomekonId(req, res) {
    try {
      const {
        error,
        value: { pokemonId },
      } = pokemonByIdSchema.validate(req.params);

      if (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
      } else {
        const pokemon = await this.pokemonUseCases.findById(pokemonId);

        res.status(StatusCodes.OK).json(pokemon);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao criar o exemplo' });
    }
  }
}

module.exports = PokemonController;

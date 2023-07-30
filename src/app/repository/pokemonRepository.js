const PokemonModel = require('../models/pokemon');

class PokemonRepository {
  async findAll(limit, offset, searchFilters = false) {
    if (searchFilters) {
      return PokemonModel.findAndCountAll({
        limit,
        offset,
        where: {
          ...searchFilters,
        },
      });
    } else {
      return PokemonModel.findAndCountAll({
        limit,
        offset,
      });
    }
  }

  async findById(pokemonId) {
    return PokemonModel.findOne({
      where: {
        id: pokemonId,
      },
    });
  }
}

module.exports = PokemonRepository;

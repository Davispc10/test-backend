const Pokemon = require('../models/pokemonModel');

class PokemonService {
  static async getAllPokemons(page = 1, size = 10, filter = {}) {
    const offset = (page - 1) * size;
    const { count, rows } = await Pokemon.findAndCountAll({
      where: filter,
      offset,
      limit: size,
    });
    return {
      total: count,
      data: rows,
    };
  }

  static async getPokemonById(id) {
    return await Pokemon.findByPk(id);
  }

  static async getLegendaryPokemons(page = 1, size = 10) {
    const offset = (page - 1) * size;
    const { count, rows } = await Pokemon.findAndCountAll({
      where: { legendary: true },
      offset,
      limit: size,
    });
    return {
      total: count,
      data: rows,
    };
  }
}

module.exports = PokemonService;

import Pokemon from '../models/pokemon';
import paginationHandler from '../services/paginationHandler';

class PokemonController {
  async getInfo(req, res) {
    const info = [
      {
        description: 'Banco de dados com informações referentes ao jogo Pokemon Go!',
        tableSize: await Pokemon.count(),
        pokemonAttributes: await Pokemon.getAttributes(),
      },
    ];

    return res.json(info);
  }

  async listAll(req, res) {
    const { limit, offset, page, totalPages } = await paginationHandler(req.query);
    const pokemons = await Pokemon.findAndCountAll({ limit, offset });

    const response = {
      totalItens: pokemons.count,
      paginationSize: limit,
      totalPages,
      currentPage: page,
      pokemons: pokemons.rows,
    };

    return res.json(response);
  }

  async getById(req, res) {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id);
    if (pokemon) {
      return res.json(pokemon);
    }
    return res.status(404).json({ error: `The id ${id} does not exists in the database.` });
  }

  async store(req, res) {
    const newPokemon = req.body;
    const pokemon = await Pokemon.create(newPokemon);
    return res.json(pokemon);
  }

  async update(req, res) {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id);

    if (pokemon) {
      await pokemon.update(req.body);
      return res.json(pokemon);
    }
    return res.status(404).json({ error: `The id ${id} does not exists in the database.` });
  }

  async delete(req, res) {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id);

    if (pokemon) {
      await pokemon.destroy();
      return res.json({ message: `Element with id ${id} successfully deleted.` });
    }
    return res.status(404).json({ error: `The id ${id} does not exists in the database.` });
  }
}

export default new PokemonController();

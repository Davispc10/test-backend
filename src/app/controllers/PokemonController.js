import Pokemon from '../models/pokemon';

class PokemonController {
  async getInfo(req, res) {
    const info = [];
    info.push({ description: 'Banco de dados com informações referentes ao jogo Pokemon Go!' });
    info.push({ pokemonAttributes: Pokemon.getAttributes() });
    info.push({ tableSize: await Pokemon.count() });
    return res.json(info);
  }

  async listAll(req, res) {
    const pokemons = await Pokemon.findAll();
    return res.json(pokemons);
  }

  async getById(req, res) {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id);
    if (pokemon) {
      return res.json(pokemon);
    } else {
      return res.status(400).json({ error: `The id ${id} does not exists in the database.` });
    }
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
    } else {
      return res.status(400).json({ error: `The id ${id} does not exists in the database.` });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const pokemon = await Pokemon.findByPk(id);

    if (pokemon) {
      await pokemon.destroy();
      return res.json({ message: `Element with id ${id} successfully deleted.` });
    } else {
      return res.status(400).json({ error: `The id ${id} does not exists in the database.` });
    }
  }
}

export default new PokemonController();

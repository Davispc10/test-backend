import Pokemon from '../models/pokemon';

class PokemonController {
  async listAll(req, res) {
    const pokemons = await Pokemon.findAll();
    return res.json(pokemons);
  }

  async listById(req, res) {
    const pokemon = await Pokemon.findByPk(req.params.id);
    return res.json(pokemon);
  }

  async store(req, res) {
    const myPokemon = req.body;
    const { id, name } = await Pokemon.create(myPokemon);
    return res.json({
      id,
      name,
    });
  }
}

export default new PokemonController();

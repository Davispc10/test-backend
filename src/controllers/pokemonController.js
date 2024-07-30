const PokemonService = require('../services/pokemonService');
const { querySchema } = require('./queryDto')

class PokemonController {
  static async getAllPokemons(req, res) {
    try {
      const { page, size, filter, error } = querySchema.safeParse(req.query);
      if (error) {
        console.log('%o', error)
        return res.status(400).json({ error: 'Invalid query parameters' });
      }
      const pokemons = await PokemonService.getAllPokemons(page, size, filter);
      res.json(pokemons);
    } catch (error) {
      console.error('Error fetching all Pokemons:', error);
      res.status(500).json({ error: 'Failed to fetch Pokemons' });
    }
  }

  static async getPokemonById(req, res) {
    try {
      const { id } = req.params;
      const pokemon = await PokemonService.getPokemonById(id);
      if (!pokemon) {
        return res.status(404).json({ error: 'Pokemon not found' });
      }
      res.json(pokemon);
    } catch (error) {
      console.error(`Error fetching Pokemon with ID ${req.params.id}:`, error);
      res.status(500).json({ error: 'Failed to fetch Pokemon' });
    }
  }

  static async getLegendaryPokemons(req, res) {
    try {
      const { page, size, filter, error } = querySchema.safeParse(req.query);
      if (error) {
        return res.status(400).json({ error: 'Invalid query parameters' });
      }
      const pokemons = await PokemonService.getLegendaryPokemons(page, size);
      res.json(pokemons);
    } catch (error) {
      console.error('Error fetching legendary Pokemons:', error);
      res.status(500).json({ error: 'Failed to fetch legendary Pokemons' });
    }
  }
}

module.exports = PokemonController;

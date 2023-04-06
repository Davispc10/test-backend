import { inject, injectable } from 'inversify';
import Pokemon from '../entity/Pokemon';
import IPokemonRepository from '../repository/IPokemonRepository';
import { TYPES } from '../types';

@injectable()
class GetPokemonService {
  constructor(
    @inject(TYPES.IPokemonRepository)
    private pokemonRepository: IPokemonRepository
  ) {}

  async execute(idOrName: string): Promise<Pokemon> {
    if (isNaN(parseInt(idOrName))) {
      const name = idOrName.charAt(0).toUpperCase() + idOrName.slice(1).toLowerCase();

      const pokemon = await this.pokemonRepository.findByName(name);
      return pokemon;
    }

    const pokemon = await this.pokemonRepository.findById(parseInt(idOrName));
    return pokemon;
  }
}

export default GetPokemonService;

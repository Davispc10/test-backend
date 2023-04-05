import Pokemon from "../entity/Pokemon";
import AppError from "../errors/AppError";
import PokemonRepository from "../repository/typeorm/PokemonRepository";

class GetPokemonService {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute(idOrName: string): Promise<Pokemon> {
    if (isNaN(parseInt(idOrName))) {
      const name =
        idOrName.charAt(0).toUpperCase() + idOrName.slice(1).toLowerCase();

      const pokemon = await this.pokemonRepository.findByName(name);
      return pokemon;
    }

    const pokemon = await this.pokemonRepository.findById(parseInt(idOrName));
    return pokemon;
  }
}

export default GetPokemonService;

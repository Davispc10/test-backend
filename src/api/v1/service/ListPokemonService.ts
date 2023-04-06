import { PokemonFilter } from "../domain";
import Pokemon from "../entity/Pokemon";
import AppError from "../errors/AppError";
import IPokemonRepository from "../repository/IPokemonRepository";

class ListPokemonService {
  private pokemonRepository: IPokemonRepository;

  constructor(pokemonRepository: IPokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  public async execute(
    filters: PokemonFilter,
    page: number,
    limit: number
  ): Promise<Pokemon[]> {
    const pokemon = await this.pokemonRepository.index(filters, page, limit);
    return pokemon;
  }
}

export default ListPokemonService;

import { PokemonFilter } from "../domain";
import Pokemon from "../entity/Pokemon";
import IPokemonRepository from "../repository/IPokemonRepository";
import IService from "./IService";

export interface PokemonData {
  count: number;
  data: Pokemon[];
}

class ListPokemonService implements IService {
  private pokemonRepository: IPokemonRepository;

  constructor(pokemonRepository: IPokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  public async execute(
    filters: PokemonFilter,
    page: number,
    limit: number
  ): Promise<PokemonData> {
    const pokemon = await this.pokemonRepository.index(filters, page, limit);
    return {
      count: pokemon.count,
      data: pokemon.rows,
    };
  }
}

export default ListPokemonService;

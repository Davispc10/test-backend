import { inject, injectable } from 'inversify';
import { PokemonFilter } from '../domain';
import Pokemon from '../entity/Pokemon';
import IPokemonRepository from '../repository/IPokemonRepository';
import { TYPES } from '../types';

export interface PokemonData {
  count: number;
  data: Pokemon[];
}

@injectable()
class ListPokemonService {
  constructor(
    @inject(TYPES.IPokemonRepository)
    private pokemonRepository: IPokemonRepository
  ) {}

  public async execute(filters: PokemonFilter, page: number, limit: number): Promise<PokemonData> {
    const pokemon = await this.pokemonRepository.index(filters, page, limit);
    return {
      count: pokemon.count,
      data: pokemon.rows,
    };
  }
}

export default ListPokemonService;

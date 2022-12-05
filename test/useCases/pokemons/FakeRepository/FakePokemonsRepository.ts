import {
  IPokemonsRepository,
  SearchParams,
} from '../../../../src/modules/pokemons/domain/repositories/IPokemonsRepository';
import { Pokemon } from '../../../../src/modules/pokemons/infra/typeorm/entities/Pokemon';
import IPokemonPaginate from '../../../../src/modules/pokemons/domain/models/IPokemonPaginate';
import { IPokemon } from '../../../../src/modules/pokemons/domain/models/IPokemon';

export class FakePokemonsRepository implements IPokemonsRepository {
  public pokemons: any[] = [];

  async populate(pokemons: any[]) {
    this.pokemons = pokemons;
  }

  async findByPokedexNumber(pokedexNumber: number): Promise<IPokemon> {
    return this.pokemons.find(pokemon => pokemon.pokedexNumber === pokedexNumber);
  }

  async findPokemons({ page, skip, take }: SearchParams, data: object | null): Promise<IPokemonPaginate> {
    return {
      total: 15,
      current_page: page,
      per_page: take,
      data: this.pokemons,
    };
  }

  async create(pokemon: Pokemon): Promise<IPokemon> {
    this.pokemons.push(pokemon);
    return pokemon;
  }
}

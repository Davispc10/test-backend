import {
  IPokemonsRepository,
  SearchParams,
} from '../../../IPokemonsRepository';
import { Pokemon } from '../../../typeorm/entities/Pokemon';
import IPokemonPaginate from '../../../IPokemonPaginate';

export class InMemoryPokemonsRepository implements IPokemonsRepository {
  public pokemons: any[] = [];

  async populate(pokemons: any[]) {
    this.pokemons = pokemons;
  }

  async findByPokedexNumber(
    pokedexNumber: number,
  ): Promise<Pokemon | undefined> {
    return this.pokemons.find(
      pokemon => pokemon.pokedexNumber === pokedexNumber,
    );
  }

  async findPokemons(
    { page, skip, take }: SearchParams,
    data: object | null,
  ): Promise<IPokemonPaginate | null | Pokemon[]> {
    return {
      total: 15,
      current_page: page,
      per_page: take,
      data: this.pokemons,
    };
  }

  async create(pokemon: Pokemon): Promise<Pokemon | undefined> {
    this.pokemons.push(pokemon);
    return pokemon;
  }
}

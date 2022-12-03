import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/typeorm';
import { Pokemon } from '../entities/Pokemon';
import { IPokemonsRepository, SearchParams } from '../../IPokemonsRepository';
import { IFilters } from '../../useCases/FindPokemons.use-case';
import IPokemonPaginate from '../../IPokemonPaginate';

export class PokemonsRepository implements IPokemonsRepository {
  private pokemonRepository: Repository<Pokemon>;

  constructor() {
    this.pokemonRepository = dataSource.getRepository(Pokemon);
  }

  async create(pokemon: Pokemon): Promise<Pokemon | undefined> {
    const hasPokemon = await this.findByPokedexNumber(pokemon.pokedexNumber);

    if (hasPokemon) {
      return;
    }
    try {
      return await this.pokemonRepository.save(pokemon);
    } catch (e) {}
  }

  async findPokemons({page, skip, take}: SearchParams, data: IFilters | null): Promise<Pokemon[] | IPokemonPaginate | null> {
    const {name, pokedexNumber, generation, legendary, type1, weather1} = {...data}


    const [pokemons, ammount] = await this.pokemonRepository.findAndCount({
      where: {
        name,
        pokedexNumber,
        generation,
        legendary,
        type1,
        weather1
      },
      skip: skip, take: take
    })

    const result: IPokemonPaginate = {
      total: ammount,
      current_page: page,
      per_page: take,
      data: pokemons
    }

    return result
  }

  async findByPokedexNumber(pokedexNumber: number): Promise<Pokemon | undefined | null> {
    return await this.pokemonRepository.findOne({
      where: {
        pokedexNumber,
      },
    });
  }
}

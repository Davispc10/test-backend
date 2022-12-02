import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/typeorm';
import { Pokemon } from '../entities/Pokemon';
import { IPokemonsRepository, SearchParams } from '../../IPokemonsRepository';
import { IFilters } from '../../useCases/FindPokemons.use-case';

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

  async findPokemons({page, skip, take}: SearchParams, data: IFilters | null): Promise<Pokemon[] | null> {
    const {name, pokedexNumber, generation, legendary, type1, weather1} = {...data}


    return await this.pokemonRepository.find({
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
  }

  async findByPokedexNumber(pokedexNumber: number): Promise<Pokemon | undefined | null> {
    return await this.pokemonRepository.findOne({
      where: {
        pokedexNumber,
      },
    });
  }
}

import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/typeorm';
import { Pokemon } from '../entities/Pokemon';
import { IPokemonsRepository, SearchParams } from '../../IPokemonsRepository';
import { IFilters, IPaginatePokemons } from '../../useCases/FindPokemons.use-case';

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

  async findPokemons({page, skip, take}: SearchParams, data: IFilters | null): Promise<IPaginatePokemons> {

    const [pokemons, count] = await this.pokemonRepository.createQueryBuilder().skip(skip).take(take).getManyAndCount();

    const result = {
        per_page: take,
        total: count,
        current_page: page,
        data: pokemons,
    }
    return result
  }

    //     name: data?.name,
    //     pokedexNumber: data?.pokedexNumber,
    //     generation: data?.generation,
    //     legendary: data?.legendary

  async findByPokedexNumber(
    pokedexNumber: number,
  ): Promise<Pokemon | undefined | null> {
    return await this.pokemonRepository.findOne({
      where: {
        pokedexNumber,
      },
    });
  }
}

import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/typeorm';
import { Pokemon } from '../entities/Pokemon';
import { IPokemonsRepository } from '../../IPokemonsRepository';
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

  async findPokemons(data: IFilters | null): Promise<Pokemon[] | null> {
    const name = data.name

    return await this.pokemonRepository.find({
      where: {
        name: data?.name,
        pokedexNumber: data?.pokedexNumber,
        generation: data?.generation,
        legendary: data?.legendary
      }
    });
  }

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

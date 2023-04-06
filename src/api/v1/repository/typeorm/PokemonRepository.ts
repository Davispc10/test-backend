import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database/data-source';
import { PokemonFilter } from '../../domain';
import Pokemon from '../../entity/Pokemon';
import AppError from '../../errors/AppError';
import IPokemonRepository, { PokemonResult } from '../IPokemonRepository';

@injectable()
class PokemonRepository implements IPokemonRepository {
  private ormRepository: Repository<Pokemon>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Pokemon);
  }

  async index(filters: PokemonFilter, page: number, limit: number): Promise<PokemonResult> {
    const queryBuilder = this.ormRepository.createQueryBuilder('pokemon');

    if (filters.generation) {
      queryBuilder.andWhere('pokemon.generation = :generation', {
        generation: filters.generation,
      });
    }

    if (filters.type) {
      queryBuilder.andWhere('pokemon.type_one = :type OR pokemon.type_two = :type', {
        type: filters.type,
      });
    }

    if (filters.weather) {
      queryBuilder.andWhere('pokemon.weather1 = :weather_one OR pokemon.weather_two = :weather', {
        weather: filters.weather,
      });
    }

    if (filters.legendary !== undefined) {
      queryBuilder.andWhere('pokemon.legendary = :legendary', {
        legendary: filters.legendary,
      });
    }

    const skip = (page - 1) * limit;
    const take = limit;

    queryBuilder.skip(skip);
    queryBuilder.take(take);

    const rows = await queryBuilder.getMany();

    if (!rows) {
      throw new AppError(`Could not find pokemons with filters ${filters}`, 404);
    }

    const count = await queryBuilder.getCount();

    return {
      count,
      rows,
    };
  }

  async findById(id: number): Promise<Pokemon> {
    const pokemon = await this.ormRepository.findOneBy({ id: id });

    if (!pokemon) {
      throw new AppError(`Could not find pokemon with id ${id}`, 404);
    }

    return pokemon;
  }

  async findByName(name: string): Promise<Pokemon> {
    const pokemon = await this.ormRepository.findOneBy({ name });

    if (!pokemon) {
      throw new AppError(`Could not find pokemon with name ${name}`, 404);
    }

    return pokemon;
  }
}

export default PokemonRepository;

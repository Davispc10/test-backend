import { CreatePokemonRepository, GetAllPokemonRepository } from '@/data/contracts'
import { Pokemon } from '@/domain/entities';
import { AppDataSource } from '@/infra/data-sources'
import { Repository } from 'typeorm';

export class TypeOrmPokemonRepository implements GetAllPokemonRepository, CreatePokemonRepository {

  private readonly pokemonRepository: Repository<Pokemon>;

  constructor() {
    this.pokemonRepository = AppDataSource.getRepository(Pokemon);
  }

  async getAllPokemon(filter: string, page: number = 1, pageSize: number = 10): Promise<Pokemon[]> {
    const queryBuilder = this.pokemonRepository.createQueryBuilder('pokemon');

    if (filter) {
      queryBuilder.where('LOWER(pokemon.name) LIKE LOWER(:filter)', { filter: `%${filter}%` });
    }

    const offset = (page - 1) * pageSize;
    queryBuilder.skip(offset).take(pageSize);

    const pokemons = await queryBuilder.getMany();
    return pokemons;
  }

  async createPokemon(data: Pokemon[]): Promise<void> {
    await this.pokemonRepository.save(data);
  }
  async countPokemons(): Promise<number> {
    return await this.pokemonRepository.count();
  }
  async getPokemonById(id: string): Promise<Pokemon> {
 
    const pokemon = await this.pokemonRepository.findOne({ where: { id } });

    return pokemon;
  }
}

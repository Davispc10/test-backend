import { IPokemonsRepository } from '../../IPokemonsRepository';
import { InMemoryPokemonsRepository } from './inMemory/InMemoryPokemonsRepository';
import { FindPokemonsUseCase } from '../FindPokemons.use-case';

export class FindPokemonsUseCaseExecuter {
  private readonly inMemoryPokemonsRepository: IPokemonsRepository;
  private findPokemons: FindPokemonsUseCase;
  private pokemon: any;
  private response: any;
  private page = 1;
  private limit = 15;

  constructor() {
    this.inMemoryPokemonsRepository = new InMemoryPokemonsRepository();
    this.findPokemons = new FindPokemonsUseCase(
      this.inMemoryPokemonsRepository,
    );
  }

  resetDataCache() {
    this.pokemon = null;
    this.response = null;
  }

  async findManyPokemons() {

    this.response = await this.findPokemons.execute({
      page: this.page,
      limit: this.limit
    }, null);
  }

  assertResponseIsManyPokemons() {
    expect(this.response.data[1]).toHaveProperty('pokedexNumber');
  }
}

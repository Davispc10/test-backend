import { IPokemonsRepository } from '../../../../src/modules/pokemons/domain/repositories/IPokemonsRepository';
import { FakePokemonsRepository } from '../FakeRepository/FakePokemonsRepository';
import { FindPokemonsUseCase } from '../../../../src/modules/pokemons/useCases/FindPokemons.use-case';

export class FindPokemonsUseCaseExecuter {
  private readonly fakePokemonsRepository: IPokemonsRepository;
  private findPokemons: FindPokemonsUseCase;
  private pokemon: any;
  private response: any;
  private page = 1;
  private limit = 15;

  constructor(fakePokemonsRepository: FakePokemonsRepository) {
    this.fakePokemonsRepository = fakePokemonsRepository;
    this.findPokemons = new FindPokemonsUseCase(this.fakePokemonsRepository);
  }

  resetDataCache() {
    this.pokemon = null;
    this.response = null;
  }

  async findManyPokemons() {
    this.response = await this.findPokemons.execute(
      {
        page: this.page,
        limit: this.limit,
      },
      null,
    );
  }

  assertResponseIsManyPokemons() {
    expect(this.response.data[1].information).toHaveProperty('pokedexNumber');
  }
}

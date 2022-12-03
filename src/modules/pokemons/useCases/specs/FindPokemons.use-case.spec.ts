import { FindPokemonsUseCaseExecuter } from './FindPokemonsUseCase.executer';
import { InMemoryPokemonsRepository } from './inMemory/InMemoryPokemonsRepository';

let inMemoryPokemonsRepository: InMemoryPokemonsRepository =
  new InMemoryPokemonsRepository();

describe('Get Pokemons', () => {
  const findPokemonsExecuter = new FindPokemonsUseCaseExecuter();

  beforeEach(() => {
    findPokemonsExecuter.resetDataCache();
    inMemoryPokemonsRepository = new InMemoryPokemonsRepository();
  });

  it('should be able to get many pokemons', async () => {
    // Arrange & Act
    await findPokemonsExecuter.findManyPokemons();

    // Assert
    await findPokemonsExecuter.assertResponseIsManyPokemons();
  });
});

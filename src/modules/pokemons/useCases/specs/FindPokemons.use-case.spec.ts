import { FindPokemonsUseCaseExecuter } from './FindPokemonsUseCase.executer';
import { InMemoryPokemonsRepository } from './inMemory/InMemoryPokemonsRepository';
import { XlsxExtractor } from '../../../../shared/utils/xlsxExtractor';

const inMemoryPokemonsRepository: InMemoryPokemonsRepository =
  new InMemoryPokemonsRepository();

describe('Get Pokemons', () => {
  const findPokemonsExecuter = new FindPokemonsUseCaseExecuter(
    inMemoryPokemonsRepository,
  );
  let xlsxExtractor;

  beforeAll(async () => {
    xlsxExtractor = new XlsxExtractor(inMemoryPokemonsRepository);
    const pokemons = await xlsxExtractor.convertXlsxToJSON();
    await inMemoryPokemonsRepository.populate(pokemons);
  });

  beforeEach(() => {
    findPokemonsExecuter.resetDataCache();
  });

  it('should be able to get many pokemons', async () => {
    // Arrange & Act
    await findPokemonsExecuter.findManyPokemons();

    // Assert
    await findPokemonsExecuter.assertResponseIsManyPokemons();
  });
});

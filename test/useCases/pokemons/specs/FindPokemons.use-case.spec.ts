import { FindPokemonsUseCaseExecuter } from '../executers/FindPokemonsUseCase.executer';
import { FakePokemonsRepository } from '../FakeRepository/FakePokemonsRepository';
import { XlsxExtractor } from '../../../../src/shared/utils/xlsxExtractor';

const inMemoryPokemonsRepository: FakePokemonsRepository =
  new FakePokemonsRepository();

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

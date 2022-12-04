import { IUsersRepository } from '../../../../src/modules/users/domain/repositories/IUsersRepository';
import { FakeUsersRepository } from '../FakeRepository/FakeUsersRepository';
import { UserUseCasesSpecExecuter } from '../executers/UserUseCases-spec.executer';

let inMemoryUserRepository: IUsersRepository;

describe('Find User By Email', () => {
  const findUserExecuter = new UserUseCasesSpecExecuter();

  beforeEach(() => {
    findUserExecuter.resetDataCache();
    inMemoryUserRepository = new FakeUsersRepository();
  });

  it('should be able to find an user by his email', async () => {
    // Arrange
    await findUserExecuter.generateUser();
    await findUserExecuter.createNewUser();

    // Act
    await findUserExecuter.findUserByEmail();

    // Assert
    await findUserExecuter.assertResponseIsUser();
  });

  it('should throw a not found error when user from email does not exist', async () => {
    // Arrange
    await findUserExecuter.generateUser();

    // Act & Assert
    await findUserExecuter.assertResponseIsEmailNotFound();
  });
});

import { IUsersRepository } from '../../IUsersRepository';
import { InMemoryUsersRepository } from './inMemory/InMemoryUsersRepository';
import { UserUseCasesSpecExecuter } from './UserUseCases-spec.executer';

let inMemoryUserRepository: IUsersRepository = new InMemoryUsersRepository();
let findUser = new FindUserByUsernameUseCase(inMemoryUserRepository);

describe('Create User', () => {
  const findUserExecuter = new UserUseCasesSpecExecuter();

  beforeEach(() => {
    findUserExecuter.resetDataCache();
    inMemoryUserRepository = new InMemoryUsersRepository();
    findUser = new FindUserByUsernameUseCase(inMemoryUserRepository);
  });

  it('should be able to find an user by his username', async () => {
    // Arrange
    await findUserExecuter.generateUser();
    await findUserExecuter.createNewUser();

    // Act
    await findUserExecuter.findUserByUsername();

    // Assert
    await findUserExecuter.assertResponseIsUser();
  });

  it('should throw a not found error when user from username does not exist', async () => {
    // Arrange & Act
    await findUserExecuter.generateUser()
    await findUserExecuter.findUserByUsername();

    // Assert
    await findUserExecuter.assertResponseIsUserNotFound();
  });
});

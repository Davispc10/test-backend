import { CreateUserUseCase } from '../CreateUser.use-case';
import { InMemoryUsersRepository } from './inMemory/InMemoryUsersRepository';
import { IUsersRepository } from '../../IUsersRepository';
import { UserUseCasesSpecExecuter } from './UserUseCases-spec.executer';

let inMemoryUserRepository: IUsersRepository;

describe('Create User', () => {
  const createUserExecuter = new UserUseCasesSpecExecuter();

  beforeEach(() => {
    createUserExecuter.resetDataCache();
    inMemoryUserRepository = new InMemoryUsersRepository();
  });

  it('should be able to create a new user', async () => {
    // Arrange
    await createUserExecuter.generateUser();

    // Act
    await createUserExecuter.createNewUser();

    // Assert
    await createUserExecuter.assertResponseIsUser();
  });

  it('should throw an error when user tries to create an account with an existing email', async () => {
    // Arrange
    await createUserExecuter.generateUser();
    await createUserExecuter.createNewUser();

    // Act
    await createUserExecuter.createNewUser();

    // Assert
    await createUserExecuter.assertResponseIsConflict();
  });
});

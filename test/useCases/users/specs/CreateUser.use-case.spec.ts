import { FakeUsersRepository } from '../FakeRepository/FakeUsersRepository';
import { IUsersRepository } from '../../../../src/modules/users/domain/repositories/IUsersRepository';
import { UserUseCasesSpecExecuter } from '../executers/UserUseCases-spec.executer';

let fakeUserRepository: IUsersRepository;

describe('Create User', () => {
  const createUserExecuter = new UserUseCasesSpecExecuter();

  beforeEach(() => {
    createUserExecuter.resetDataCache();
    fakeUserRepository = new FakeUsersRepository();
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

    // Act & Assert
    await createUserExecuter.assertResponseIsConflict();
  });
});

import { FakeUsersRepository } from '../FakeRepository/FakeUsersRepository';
import { IUsersRepository } from '../../../../src/modules/users/domain/repositories/IUsersRepository';
import { UserUseCasesSpecExecuter } from '../executers/UserUseCases-spec.executer';

let fakeUserRepository: IUsersRepository;

describe('Create User', () => {
  const createSessionExecuter = new UserUseCasesSpecExecuter();

  beforeEach(() => {
    createSessionExecuter.resetDataCache();
    fakeUserRepository = new FakeUsersRepository();
  });

  it('should return access token when input is correct credentials', async () => {
    // Arrange
    await createSessionExecuter.generateUser();
    await createSessionExecuter.createNewUser();
    await createSessionExecuter.setCorrectCredentials();

    // Act
    await createSessionExecuter.signIn();

    // Assert
    await createSessionExecuter.assertResponseIsAccessToken();
  });

  it('should throw unauthorized when input is wrong username', async () => {
    // Arrange
    await createSessionExecuter.generateUser();
    await createSessionExecuter.createNewUser();
    await createSessionExecuter.setWrongUsername();

    // Act & Assert
    await createSessionExecuter.assertResponseIsUnauthorized();
  });

  it('should throw unauthorized when input is wrong password', async () => {
    // Arrange
    await createSessionExecuter.generateUser();
    await createSessionExecuter.createNewUser();
    await createSessionExecuter.setWrongPassword();

    // Act & Assert
    await createSessionExecuter.assertResponseIsUnauthorized();
  });
});

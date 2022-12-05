import { UserUseCasesSpecExecuter } from '../executers/UserUseCases-spec.executer';

describe('Create User', () => {
  const createUserExecuter = new UserUseCasesSpecExecuter();

  beforeEach(() => {
    createUserExecuter.resetDataCache();
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

import { IUsersRepository } from '../../../../src/modules/users/domain/repositories/IUsersRepository';
import { FakeUsersRepository } from '../FakeRepository/FakeUsersRepository';
import { UserUseCasesSpecExecuter } from '../executers/UserUseCases-spec.executer';

let fakeUsersRepository: IUsersRepository;

describe('Find User By Username', () => {
  const findUserExecuter = new UserUseCasesSpecExecuter();

  beforeEach(() => {
    findUserExecuter.resetDataCache();
    fakeUsersRepository = new FakeUsersRepository();
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
    // Arrange
    await findUserExecuter.generateUser();

    // Act & Assert
    await findUserExecuter.assertResponseIsUsernameNotFound();
  });
});

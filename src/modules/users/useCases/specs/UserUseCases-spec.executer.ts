import { CreateUserUseCase } from '../CreateUser.use-case';
import { InMemoryUsersRepository } from './inMemory/InMemoryUsersRepository';
import { IUsersRepository } from '../../IUsersRepository';
import { FindUserByUsernameUseCase } from '../FindUserByUsername.use-case';
import { FindUserByEmailUseCase } from '../FindUserByEmail.use-case';

export class UserUseCasesSpecExecuter {
  private readonly inMemoryUserRepository: IUsersRepository;
  private createUser: CreateUserUseCase;
  private findUsername: FindUserByUsernameUseCase;
  private findEmail: FindUserByEmailUseCase;
  private user: any;
  private response: any;

  constructor() {
    this.inMemoryUserRepository = new InMemoryUsersRepository();
    this.createUser = new CreateUserUseCase(this.inMemoryUserRepository);
    this.findUsername = new FindUserByUsernameUseCase(
      this.inMemoryUserRepository,
    );
    this.findEmail = new FindUserByEmailUseCase(this.inMemoryUserRepository);
  }

  resetDataCache() {
    this.user = null;
    this.response = null;
    this.inMemoryUserRepository.resetDataCache();
  }

  generateUser() {
    this.user = {
      username: 'username123',
      email: 'email123',
      password: 'Password123',
    };
  }

  async createNewUser() {
    this.response = await this.createUser.execute(this.user);
  }

  async findUserByUsername() {
    this.response = await this.findUsername.execute(this.user.username);
  }

  async findUserByEmail() {
    this.response = await this.findEmail.execute(this.user.email);
  }

  async assertResponseIsUser() {
    expect(this.response.username).toEqual(this.user.username);
    expect(this.response.id).toBeTruthy();
  }

  async assertResponseIsConflict() {
    expect(this.response).toHaveProperty('message');
    expect(this.response.statusCode).toEqual(409);
  }

  async assertResponseIsUserNotFound() {
    expect(this.response).toHaveProperty('message');
    expect(this.response.statusCode).toEqual(404);
  }
}

import { CreateUserUseCase } from '../CreateUser.use-case';
import { InMemoryUsersRepository } from './inMemory/InMemoryUsersRepository';
import { IUsersRepository } from '../../IUsersRepository';

export class CreateUserExecuter {
  private readonly inMemoryUserRepository: IUsersRepository;
  private createUser: CreateUserUseCase;
  private user: any;
  private response: any;

  constructor() {
    this.inMemoryUserRepository = new InMemoryUsersRepository();
    this.createUser = new CreateUserUseCase(this.inMemoryUserRepository);
  }

  resetDataCache() {
    this.user = null;
    this.response = null;
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

  async assertResponseIsNewUser() {
    expect(this.response.username).toEqual(this.user.username);
    expect(this.response.id).toBeTruthy();
  }

  async assertResponseConflict() {
    expect(this.response).toHaveProperty('message');
    expect(this.response.statusCode).toEqual(409);
  }
}

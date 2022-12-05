import { CreateUserUseCase } from '../../../../src/modules/users/useCases/CreateUser.use-case';
import { FakeUsersRepository } from '../FakeRepository/FakeUsersRepository';
import { IUsersRepository } from '../../../../src/modules/users/domain/repositories/IUsersRepository';
import { FindUserByUsernameUseCase } from '../../../../src/modules/users/useCases/FindUserByUsername.use-case';
import { FindUserByEmailUseCase } from '../../../../src/modules/users/useCases/FindUserByEmail.use-case';
import AppError from '../../../../src/shared/errors/appError';
import { CreateSessionUseCase } from '../../../../src/modules/users/useCases/CreateSession.use-case';
import BcryptHashProvider from '../../../../src/modules/users/providers/HashProvider/implementations/BcryptHashProvider';

export class UserUseCasesSpecExecuter {
  private readonly fakeUserRepository: IUsersRepository;
  private readonly HashProvider: BcryptHashProvider;
  private createSession: CreateSessionUseCase;
  private createUser: CreateUserUseCase;
  private findUsername: FindUserByUsernameUseCase;
  private findEmail: FindUserByEmailUseCase;
  private user: any;
  private response: any;
  private credentials: any;

  constructor() {
    this.fakeUserRepository = new FakeUsersRepository();
    this.HashProvider = new BcryptHashProvider();
    this.createUser = new CreateUserUseCase(this.fakeUserRepository, this.HashProvider);
    this.findUsername = new FindUserByUsernameUseCase(this.fakeUserRepository);
    this.findEmail = new FindUserByEmailUseCase(this.fakeUserRepository);
    this.createSession = new CreateSessionUseCase(this.fakeUserRepository, this.HashProvider);
  }

  resetDataCache() {
    this.user = null;
    this.response = null;
    this.fakeUserRepository.resetDataCache();
  }

  generateUser() {
    this.user = {
      username: 'username123',
      email: 'email123',
      password: 'Password123',
    };
  }

  setCorrectCredentials() {
    this.credentials = {
      username: this.user.username,
      password: this.user.password,
    };
  }

  setWrongUsername() {
    this.credentials = {
      username: 'wrong username',
      password: this.user.password,
    };
  }

  setWrongPassword() {
    this.credentials = {
      username: this.user.username,
      password: 'wrong password',
    };
  }

  async signIn() {
    this.response = await this.createSession.execute(this.credentials);
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
  }

  async assertResponseIsAccessToken() {
    expect(this.response).toHaveProperty('access_token');
  }

  async assertResponseIsUnauthorized() {
    try {
      await this.createSession.execute(this.credentials);
    } catch (e) {
      expect(e).toBeInstanceOf(AppError);
    }
  }

  async assertResponseIsConflict() {
    try {
      await this.createUser.execute(this.user);
    } catch (e) {
      expect(e).toBeInstanceOf(AppError);
    }
  }

  async assertResponseIsUsernameNotFound() {
    try {
      await this.findUsername.execute(this.user.username);
    } catch (e) {
      if (e instanceof AppError) {
        expect(e.message).toBe(`Username "${this.user.username}" not found.`);
      }
    }
  }

  async assertResponseIsEmailNotFound() {
    try {
      await this.findEmail.execute(this.user.email);
    } catch (e) {
      if (e instanceof AppError) {
        expect(e.message).toBe(`Email "${this.user.email}" not found.`);
      }
    }
  }
}

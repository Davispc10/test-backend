import { compareSync, hashSync } from 'bcrypt';
import { IHashProvider } from '../models/IHashProvider';

class BcryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hashSync(payload, 10);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compareSync(payload, hashed);
  }
}

export default BcryptHashProvider;

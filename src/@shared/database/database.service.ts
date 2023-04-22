import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export class DatabaseService {
  public constructor(
    @InjectDataSource() private readonly connection: DataSource,
  ) {}

  getDbHandle(): DataSource {
    return this.connection;
  }
}

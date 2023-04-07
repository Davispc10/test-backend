import { DataSource, Repository, ObjectLiteral, EntityTarget } from 'typeorm'
import { PgPokemon } from './pokemon.entity'

export class PgConnection {
  private static instance: PgConnection
  private connection: DataSource

  private constructor() {
    this.connection = new DataSource({
      type: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db-dinheirow',
      synchronize: true,
      logging: true,
      entities: [PgPokemon]
    })
  }

  static getInstance() {
    if (!PgConnection.instance) PgConnection.instance = new PgConnection()
    return PgConnection.instance
  }

  async initialize() {
    await this.connection.initialize()
  }

  getRepository<Entity extends ObjectLiteral>(target: EntityTarget<Entity>): Repository<Entity> {
    return this.connection.getRepository(target)
  }
}
import { DataSource, Repository, ObjectLiteral, EntityTarget } from 'typeorm'
import { PgPokemon } from './pokemon.entity'

export class PgConnection {
  private static instance: PgConnection
  private connection: DataSource

  private constructor() {
    this.connection = new DataSource({
      type: 'postgres',
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: !!(process.env.DB_SYNCHRONIZE === 'true') ?? false,
      logging: !!(process.env.DB_LOGGING === 'true') ?? false,
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
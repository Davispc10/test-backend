import { env } from '@/main/config/env'

import { DataSource } from 'typeorm'

export const makePostgresDataSource = (): DataSource => {
  return new DataSource(
    {
      type: 'postgres',
      host: env.database.host,
      port: env.database.port,
      username: env.database.username,
      password: env.database.password,
      database: env.database.database,
      entities: env.database.entities
    }
  )
}

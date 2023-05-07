import { env } from '@/main/config/env'

import { DataSource } from 'typeorm'

export const postgresDataSource = new DataSource(
  {
    type: 'postgres',
    host: env.database.host,
    port: env.database.port,
    username: env.database.username,
    password: env.database.password,
    database: env.database.database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: env.database.synchronize as boolean
  })

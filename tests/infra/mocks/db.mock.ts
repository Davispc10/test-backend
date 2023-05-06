import { PgPokedex, PgPokemon, PgPokemonFamily, PgPokemonType, PgPokemonWeather } from '@/infra/db/entities'

import { type IMemoryDb, newDb } from 'pg-mem'
import { type DataSource } from 'typeorm'

export const makeFakeDb = async (entities?: any[]): Promise<{ db: IMemoryDb, dataSource: DataSource }> => {
  const db = newDb({ autoCreateForeignKeyIndices: true })
  db.public.registerFunction({
    implementation: () => 'test',
    name: 'current_database'
  })
  db.public.registerFunction({
    implementation: () => 'test',
    name: 'version'
  })
  const dataSource = await db.adapters.createTypeormDataSource({
    type: 'postgres',
    entities: [PgPokedex, PgPokemon, PgPokemonFamily, PgPokemonType, PgPokemonWeather]
  })
  await dataSource.initialize()
  await dataSource.synchronize()
  return { db, dataSource }
}

import { PgPokemon } from '@/infra/db/entities'
import { makePostgresDataSource } from '@/infra/db/helpers'
import { PokemonRepository } from '@/infra/db/repositories'

export const makePokemonRepository = (): PokemonRepository => {
  const dataSource = makePostgresDataSource()
  return new PokemonRepository(dataSource.getRepository(PgPokemon))
}

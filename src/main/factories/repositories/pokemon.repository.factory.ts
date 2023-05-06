import { PgPokemon } from '@/infra/db/entities'
import { postgresDataSource } from '@/infra/db/helpers'
import { PokemonRepository } from '@/infra/db/repositories'

export const makePokemonRepository = (): PokemonRepository => {
  return new PokemonRepository(postgresDataSource.getRepository(PgPokemon))
}

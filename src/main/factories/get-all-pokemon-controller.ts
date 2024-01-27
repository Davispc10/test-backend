import { GetAllPokemonLoaderService } from '@/data/services'
import { GetAllPokemonController } from '@/presentation/controllers'
import { Controller } from '@/presentation/contracts'
import { TypeOrmPokemonRepository } from '@/infra/repositories'

export const makeGetAllPokemonController = (): Controller => {
  const repo = new TypeOrmPokemonRepository()
  const loader = new GetAllPokemonLoaderService(repo)
  return new GetAllPokemonController(loader)
}

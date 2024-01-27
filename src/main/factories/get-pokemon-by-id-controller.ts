import { Controller } from '@/presentation/contracts'
import { TypeOrmPokemonRepository } from '@/infra/repositories'
import { GetPokemonByIdLoaderService } from '@/data/services'
import { GetPokemonByIdController } from '@/presentation/controllers/get-pokemon-by-id'

export const makeGetPokemonByIdController = (): Controller => {
  const repo = new TypeOrmPokemonRepository()
  const loader = new GetPokemonByIdLoaderService(repo)
  return new GetPokemonByIdController(loader)
}

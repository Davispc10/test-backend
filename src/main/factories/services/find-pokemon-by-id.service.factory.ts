import { makePokemonRepository } from '@/main/factories/repositories'
import { FindPokemonByIdService } from '@/domain/services/pokemon'

export const makeFindPokemonByIdService = (): FindPokemonByIdService => {
  return new FindPokemonByIdService(makePokemonRepository())
}

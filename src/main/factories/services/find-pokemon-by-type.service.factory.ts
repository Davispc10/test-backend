import { makePokemonRepository } from '@/main/factories/repositories'
import { FindPokemonByTypeService } from '@/domain/services/pokemon'

export const makeFindPokemonByTypeService = (): FindPokemonByTypeService => {
  return new FindPokemonByTypeService(makePokemonRepository())
}

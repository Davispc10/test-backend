import { makeFindPokemonByTypeService, makeListPokemonService } from '@/main/factories/services'
import { ListPokemonController } from '@/application/controllers'

export const makeListPokemonController = (): ListPokemonController => {
  return new ListPokemonController(makeListPokemonService(), makeFindPokemonByTypeService())
}

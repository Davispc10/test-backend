import { makePokemonRepository } from '@/main/factories/repositories'
import { ListPokemonService } from '@/domain/services/pokemon'

export const makeListPokemonService = (): ListPokemonService => {
  return new ListPokemonService(makePokemonRepository())
}

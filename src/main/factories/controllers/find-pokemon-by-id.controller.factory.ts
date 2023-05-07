import { makeFindPokemonByIdService } from '@/main/factories/services'
import { FindPokemonByIdController } from '@/application/controllers'

export const makeFindPokemonByIdController = (): FindPokemonByIdController => {
  return new FindPokemonByIdController(makeFindPokemonByIdService())
}

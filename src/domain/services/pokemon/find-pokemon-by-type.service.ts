import { type PokemonEntity } from '@/domain/entities'
import { type FindPokemonByTypeRepository } from '@/domain/contracts/repositories'

export class FindPokemonByTypeService {
  constructor (
    private readonly findPokemonByTypeRepository: FindPokemonByTypeRepository
  ) {}

  async execute (command: { type: string }): Promise<PokemonEntity[]> {
    return await this.findPokemonByTypeRepository.findByType(command.type)
  }
}

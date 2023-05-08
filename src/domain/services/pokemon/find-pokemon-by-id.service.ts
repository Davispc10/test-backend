import { type PokemonEntity } from '@/domain/entities'
import { NotFoundError } from '@/domain/errors'
import { type FindPokemonByIdRepository } from '@/domain/contracts/repositories'

export class FindPokemonByIdService {
  constructor (
    private readonly findPokemonByIdRepository: FindPokemonByIdRepository
  ) {}

  async execute (command: { id: number }): Promise<PokemonEntity> {
    const pokemon = await this.findPokemonByIdRepository.find(command.id)
    if (!pokemon) throw new NotFoundError(`There is no pokemon for id = ${command.id}!`)
    return pokemon
  }
}

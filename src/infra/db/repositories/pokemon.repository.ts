import { type PgPokemon } from '@/infra/db/entities'
import { type ListPokemonRepository } from '@/domain/contracts/repositories'
import { type PokemonEntity } from '@/domain/entities'

import { type Repository } from 'typeorm'

export class PokemonRepository implements ListPokemonRepository {
  constructor (
    private readonly pokemonRepository: Repository<PgPokemon>
  ) {}

  async list (): Promise<PokemonEntity[]> {
    return await this.pokemonRepository.find()
  }
}

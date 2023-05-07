import { type PgPokemon } from '@/infra/db/entities'
import { type FindPokemonByTypeRepository, type FindPokemonByIdRepository, type ListPokemonRepository } from '@/domain/contracts/repositories'
import { type PokemonEntity } from '@/domain/entities'

import { ILike, type Repository } from 'typeorm'

export class PokemonRepository implements ListPokemonRepository, FindPokemonByIdRepository, FindPokemonByTypeRepository {
  constructor (
    private readonly pokemonRepository: Repository<PgPokemon>
  ) {}

  async list (): Promise<PokemonEntity[]> {
    return await this.pokemonRepository.find()
  }

  async find (id: number): Promise<PokemonEntity | undefined> {
    const dbPokemon = await this.pokemonRepository.findOne({ where: { id } })
    return dbPokemon ?? undefined
  }

  async findByType (type: string): Promise<PokemonEntity[]> {
    return await this.pokemonRepository.find({ where: { types: { name: ILike(`%${type}%`) } } })
  }
}

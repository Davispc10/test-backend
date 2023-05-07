import { type PgPokemon } from '@/infra/db/entities'
import { type FindPokemonByIdRepository, type ListPokemonRepository } from '@/domain/contracts/repositories'
import { PokemonEntity } from '@/domain/entities'

import { type Repository } from 'typeorm'

export class PokemonRepository implements ListPokemonRepository, FindPokemonByIdRepository {
  constructor (
    private readonly pokemonRepository: Repository<PgPokemon>
  ) {}

  async list (): Promise<PokemonEntity[]> {
    const dbPokemons = await this.pokemonRepository.find()
    if (dbPokemons.length === 0) return []
    return dbPokemons.map(dbPokemon => PokemonEntity.fromDB(dbPokemon))
  }

  async find (id: number): Promise<PokemonEntity | undefined> {
    const dbPokemon = await this.pokemonRepository.findOne({ where: { id } })
    if (!dbPokemon) return undefined
    return PokemonEntity.fromDB(dbPokemon)
  }
}

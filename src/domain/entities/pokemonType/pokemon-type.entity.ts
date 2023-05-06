import { type PokemonTypeProperties } from './pokemon-type.properties'

export class PokemonTypeEntity implements PokemonTypeProperties {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  constructor (input: PokemonTypeProperties) {
    this.id = input.id
    this.name = input.name
    this.createdAt = input.createdAt
    this.updatedAt = input.updatedAt
  }

  static fromDB (input: PokemonTypeProperties): PokemonTypeEntity {
    return new PokemonTypeEntity(input)
  }
}

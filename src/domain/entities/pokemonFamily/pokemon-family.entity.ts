import { type PokemonFamilyProperties } from './pokemon-family.properties'

export class PokemonFamilyEntity implements PokemonFamilyProperties {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  constructor (input: PokemonFamilyProperties) {
    this.id = input.id
    this.name = input.name
    this.createdAt = input.createdAt
    this.updatedAt = input.updatedAt
  }

  static fromDB (input: PokemonFamilyProperties): PokemonFamilyEntity {
    return new PokemonFamilyEntity(input)
  }
}

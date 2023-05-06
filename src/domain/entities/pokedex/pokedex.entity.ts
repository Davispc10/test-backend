import { type PokedexProperties } from './pokedex.properties'

export class PokedexEntity implements PokedexProperties {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  constructor (input: PokedexProperties) {
    this.id = input.id
    this.name = input.name
    this.createdAt = input.createdAt
    this.updatedAt = input.updatedAt
  }

  static fromDB (input: PokedexProperties): PokedexEntity {
    return new PokedexEntity(input)
  }
}

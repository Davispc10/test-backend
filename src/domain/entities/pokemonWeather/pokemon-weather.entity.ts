import { type PokemonWeatherProperties } from './pokemon-weather.properties'

export class PokemonWeatherEntity implements PokemonWeatherProperties {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  constructor (input: PokemonWeatherProperties) {
    this.id = input.id
    this.name = input.name
    this.createdAt = input.createdAt
    this.updatedAt = input.updatedAt
  }

  static fromDB (input: PokemonWeatherProperties): PokemonWeatherEntity {
    return new PokemonWeatherEntity(input)
  }
}

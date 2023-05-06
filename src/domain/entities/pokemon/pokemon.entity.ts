import { type PokemonProperties } from './pokemon.properties'
import {
  type PokedexEntity,
  type PokemonFamilyEntity,
  type PokemonTypeEntity,
  type PokemonWeatherEntity
} from '@/domain/entities'

export class PokemonEntity implements PokemonProperties {
  id: number
  name: string
  imgName: string
  generation: number
  evolutionStage: number
  evolved: boolean
  crossGen: boolean
  atk: number
  def: number
  sta: number
  legendary: boolean
  aquireable: boolean
  spaws: boolean
  regional: boolean
  raidable: boolean
  hatchable: boolean
  shiny: boolean
  nest: boolean
  notGettable: boolean
  futureEvolve: boolean
  cp40: number
  cp39: number
  pokedex: PokedexEntity
  type: PokemonTypeEntity[]
  weather: PokemonWeatherEntity[]
  family: PokemonFamilyEntity[]
  createdAt: Date
  updatedAt: Date

  constructor (input: PokemonProperties) {
    this.id = input.id
    this.name = input.name
    this.imgName = input.imgName
    this.generation = input.generation
    this.evolutionStage = input.evolutionStage
    this.evolved = input.evolved
    this.crossGen = input.crossGen
    this.atk = input.atk
    this.def = input.def
    this.sta = input.sta
    this.legendary = input.legendary
    this.aquireable = input.aquireable
    this.spaws = input.spaws
    this.regional = input.regional
    this.raidable = input.raidable
    this.hatchable = input.hatchable
    this.shiny = input.shiny
    this.nest = input.nest
    this.notGettable = input.notGettable
    this.futureEvolve = input.futureEvolve
    this.cp40 = input.cp40
    this.cp39 = input.cp39
    this.createdAt = input.createdAt
    this.updatedAt = input.updatedAt
  }

  static fromDB (input: PokemonProperties): PokemonEntity {
    return new PokemonEntity(input)
  }
}

import {
  type PokedexProperties,
  type PokemonFamilyProperties,
  type PokemonTypeProperties,
  type PokemonWeatherProperties
} from '@/domain/entities'

export type PokemonProperties = {
  id: number
  name: string
  imgName: string
  generation: number
  evolutionStage: string
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
  pokedex: PokedexProperties
  types: PokemonTypeProperties[]
  weathers: PokemonWeatherProperties[]
  family: PokemonFamilyProperties
  createdAt: Date
  updatedAt: Date
}

interface IPokemonDTO {
  id?: string
  name?: string 
  pokedexId?: number
  imageName?: string
  generation?: number
  evolutionStage?: string
  evolved?: number
  familyID?: number
  crossGen?: boolean
  type1?: string
  type2?: string
  weather1?: string
  weather2?: string
  statTotal?: number
  atk?: number
  def?: number
  sta?: number
  legendary?: boolean
  aquireable?: number
  spawns?: number
  regional?: number
  raidable?: number
  hatchable?: number
  shiny?: number
  nest?: number
  new?: boolean
  notGettable?: boolean
  futureEvolve?: boolean
  cp40?: number
  cp39?: number
}
export { IPokemonDTO }

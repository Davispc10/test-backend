export interface FindAllPokemonsRepository {
  findAll: (params: FindAllPokemonsRepository.Params) => Promise<FindAllPokemonsRepository.Result>
}

export namespace FindAllPokemonsRepository {
  export type Params = {
    page: number
    filters: { [key: string]: string | boolean | number }
  }

  export type Result = {
    data: Pokemon[]
    page: number
    totalPages: number
    limit: number
    total: number
  }

  type Pokemon = {
    name: string
    pokedexNumber: number
    imgName: string
    generation: number
    evolutionStage?: string
    evolved: boolean
    familyID?: number
    crossGen: boolean
    type1: string
    type2?: string
    weather1: string
    weather2?: string
    statTotal: number
    atk: number
    def: number
    sta: number
    legendary: boolean
    aquireable: number
    spawns: boolean
    regional: boolean
    raidable: number
    hatchable: number
    shiny: boolean
    nest: boolean
    new: boolean
    notGettable: boolean
    futureEvolve: boolean
    cp40: number
    cp39: number
  }

}
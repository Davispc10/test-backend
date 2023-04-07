export interface FindAllPokemonsService {
  findAll: (params: FindAllPokemonsService.Params) => Promise<FindAllPokemonsService.Result>
}

export namespace FindAllPokemonsService {
  export type Params = {
    page: number
    filters: Filters
  }

  type Filters = {
    name: string
  }

  export type Result = {
    data: Pokemon[]
    page: number
    totalPage: number
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
    raidable: boolean
    hatchable: boolean
    shiny: boolean
    nest: boolean
    new: boolean
    notGettable: boolean
    futureEvolve: boolean
    cp40: number
    cp39: number
  }

}
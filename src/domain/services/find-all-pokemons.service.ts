export interface FindAllPokemonsService {
  findAll: (params: FindAllPokemonsService.Params) => Promise<FindAllPokemonsService.Result>
}

export namespace FindAllPokemonsService {
  export type Params = {
    page: number
    filters: Filters
  }

  type Filters = {
    type1?: string
    type2?: string
    generation?: number
    hatchable?: number
    legendary?: boolean
    evolve?: boolean
    spawns?: boolean
    shiny?: boolean
    new?: boolean
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
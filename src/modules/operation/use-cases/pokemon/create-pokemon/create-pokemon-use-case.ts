import { inject, injectable } from 'tsyringe'
import { Pokemon } from '@modules/operation/infra/typeorm/entities/pokemon'
import { IPokemonRepository } from '@modules/operation/repositories/i-pokemon-repository'

interface IRequest {
  id: string
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
  isNew?: boolean
  notGettable?: boolean
  futureEvolve?: boolean
  cp40?: number
  cp39?: number
}


@injectable()
class CreatePokemonUseCase {
  constructor(
    @inject('PokemonRepository')
    private pessoaRepository: IPokemonRepository
  ) {}

  async execute(pokemons : IRequest[]): Promise<Pokemon> { 
    
      console.log([...pokemons])
      const result = await this.pessoaRepository.create(pokemons)
      .then(pessoaResult => {
        return pessoaResult
      })
      .catch(error => {
        return error
      })

    return result
  }
}

export { CreatePokemonUseCase }

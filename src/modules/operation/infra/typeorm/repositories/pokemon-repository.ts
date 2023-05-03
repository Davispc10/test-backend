import { getRepository, Repository } from 'typeorm'
import { IPokemonDTO } from '@modules/operation/dtos/i-pokemon-dto'
import { IPokemonRepository } from '@modules/operation/repositories/i-pessoa-repository'
import { Pokemon } from '@modules/operation/infra/typeorm/entities/pokemon'
import { serverError, ok, HttpResponse } from '@shared/helpers'

class PokemonRepository implements IPokemonRepository {
  private repository: Repository<Pokemon>

  constructor() {
    this.repository = getRepository(Pokemon)
  }


  // create
  async create ({
    id,
    name,
    pokedexId,
    imageName,
    generation,
    evolutionStage,
    evolved,
    familyID,
    crossGen,
    type1,
    type2,
    weather1,
    weather2,
    statTotal,
    atk,
    def,
    sta,
    legendary,
    aquireable,
    spawns,
    regional,
    raidable,
    hatchable,
    shiny,
    nest,
    new,
    notGettable,
    futureEvolve,
    cp40,
    cp39
  }: IPokemonDTO): Promise<HttpResponse> {
    const pessoa = this.repository.create(
      { 
          id,
          name,
          pokedexId,
          imageName,
          generation,
          evolutionStage,
          evolved,
          familyID,
          crossGen,
          type1,
          type2,
          weather1,
          weather2,
          statTotal,
          atk,
          def,
          sta,
          legendary,
          aquireable,
          spawns,
          regional,
          raidable,
          hatchable,
          shiny,
          nest,
          new,
          notGettable,
          futureEvolve,
          cp40,
          cp39
      }
    )

    const result = await this.repository.save(pessoa)
      .then(pessoaResult => {
        return ok(pessoaResult)
      })
      .catch(error => {
        return serverError(error.message)
      })

    return result
  }


  // list
  async list (
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: Array<'ASC' | 'DESC'>
  ): Promise<HttpResponse> {

    if ((typeof columnOrder === 'undefined') || (columnOrder.length === 0)) {
      const sortArray = new Array<'ASC' | 'DESC'>(4).fill('ASC')
      columnOrder = sortArray
    }

    const offset = rowsPerPage * page

    try {
      let persons = await this.repository.createQueryBuilder('per')
        .select()
        .where('CAST(nome AS VARCHAR) ilike :search', { search: `%${search}%` })
        .take(rowsPerPage)
        .skip(offset)
        .getMany()

      // below statements are to solve typeorm bug related to use of leftjoins, filters, .take and .skip together

      if (persons.length > rowsPerPage) {
        persons = persons.slice(offset, offset + rowsPerPage)
      }

      //

      return ok(persons)
    } catch (err) {
      return serverError(err)
    }
  }


}

export { PokemonRepository }

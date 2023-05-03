import {IPokemonDTO } from '@modules/operation/dtos/i-pokemon-dto'
import { HttpResponse } from '@shared/helpers'

interface IPokemonRepository {
  // create
  create (data: IPokemonDTO[]): Promise<HttpResponse> 


  // list
  list (
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: ('ASC' | 'DESC')[]
  ): Promise<HttpResponse>
}

export { IPokemonRepository }

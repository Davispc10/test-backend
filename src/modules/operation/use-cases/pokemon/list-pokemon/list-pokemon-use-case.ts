import { inject, injectable } from 'tsyringe'
import { IPokemonRepository } from '@modules/operation/repositories/i-pokemon-repository'
import { HttpResponse } from '@shared/helpers'

interface IRequest {
  search: string,
  page: number,
  rowsPerPage: number,
  columnOrder: Array<'ASC' | 'DESC'>
}

@injectable()
class ListPokemonUseCase {
  constructor(
    @inject('PokemonRepository')
    private pessoaRepository: IPokemonRepository
  ) {}

  async execute({
    search,
    page,
    rowsPerPage,
    columnOrder
  }: IRequest): Promise<HttpResponse> {
    const pessoas = await this.pessoaRepository.list(
      search,
      page,
      rowsPerPage,
      columnOrder
    )

    return pessoas
  }
}

export { ListPokemonUseCase }

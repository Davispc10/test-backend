import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListPokemonUseCase } from './list-pokemon-use-case'

class ListPokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      search,
      page,
      rowsPerPage,
      columnOrder
    } = request.body

    const listPokemonUseCase = container.resolve(ListPokemonUseCase)

    const pessoas = await listPokemonUseCase.execute({
      search: search as string,
      page: page as number,
      rowsPerPage: rowsPerPage as number,
      columnOrder: columnOrder as Array<'ASC' | 'DESC'>
    })

    return response.json(pessoas)
  }
}

export { ListPokemonController }

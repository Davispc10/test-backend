import { Request, Response } from 'express'
import { FindAllPokemonsService } from '../../domain/services/find-all-pokemons.service'

export class FindAllPokemonsController {
  constructor(
    private readonly findAllPokemonService: FindAllPokemonsService
  ) { }

  findAll = async (request: Request, response: Response): Promise<Response> => {
    try {
      const DEFAULT_PAGE = 1
      const { page, ...filters } = request.query as any

      const pokemons = await this.findAllPokemonService.findAll({
        page: Number(page ?? DEFAULT_PAGE),
        filters
      })

      return response.status(200).json(pokemons)
    } catch (error) {
      return response.status(500).json({ error })
    }
  }
}
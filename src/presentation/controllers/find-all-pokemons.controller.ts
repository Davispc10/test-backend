import { Request, Response } from 'express'
import { FindAllPokemonsService } from '../../domain/services/find-all-pokemons.service'
import { InvalidDataException } from '../../domain/errors/invalid-data-exception'

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
      console.log(error)

      if (error instanceof InvalidDataException)
        return response.status(400).json({ error: error.message })

      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}
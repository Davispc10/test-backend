import { Request, Response } from 'express'
import { FindPokemonByNameOrIdService } from '../../domain/services/find-pokemon-by-name-or-id.service'
import { InvalidDataException } from '../../domain/errors/invalid-data-exception'

export class FindPokemonByNameOrIdController {
  constructor(
    private readonly findPokemonByNameOrIdService: FindPokemonByNameOrIdService
  ) { }

  find = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { name, id } = request.query as any

      const pokemons = await this.findPokemonByNameOrIdService.findByNameOrId({ id, name })
      if (!pokemons)
        return response.status(204).json()

      return response.status(200).json(pokemons)
    } catch (error) {
      console.log(error)

      if (error instanceof InvalidDataException)
        return response.status(400).json({ error: error.message })

      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}
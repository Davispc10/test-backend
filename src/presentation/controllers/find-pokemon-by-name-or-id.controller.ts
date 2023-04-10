import { Request, Response } from 'express'
import { FindPokemonByNameOrIdService } from '../../domain/services/find-pokemon-by-name-or-id.service'

export class FindPokemonByNameOrIdController {
  constructor(
    private readonly findPokemonByNameOrIdService: FindPokemonByNameOrIdService
  ) { }

  find = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { name, id } = request.query as any

      const pokemons = await this.findPokemonByNameOrIdService.findByNameOrId({ id, name })

      return response.status(200).json(pokemons)
    } catch (error) {
      console.log(error)
      return response.status(500).json({ error })
    }
  }
}
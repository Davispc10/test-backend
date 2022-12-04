import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {
  FindPokemonsUseCase,
  IFilters,
} from '../useCases/FindPokemons.use-case';

export class FindPokemonsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;

    const {
      name,
      pokedexNumber,
      generation,
      legendary,
      type1,
      weather,
    }: IFilters = request.query;
    const findPokemonsUseCase = container.resolve(FindPokemonsUseCase);

    const data: IFilters = {
      name: name,
      pokedexNumber: pokedexNumber,
      generation: generation,
      legendary: legendary,
      type1: type1,
      weather1: weather,
    };
    try {
      const pokemons = await findPokemonsUseCase.execute({ page, limit }, data);

      return response.status(200).json(pokemons);
    } catch (error) {

      response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode
      })
    }
  }
}

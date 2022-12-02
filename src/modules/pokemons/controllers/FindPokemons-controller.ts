import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindPokemonsUseCase, IFilters } from '../useCases/FindPokemons.use-case';

export class FindPokemonsController {
  async handle(request: Request, response: Response) {
    const page = request.query.page ? Number(request.query.page) : 1
    const limit = request.query.limit ? Number(request.query.limit) : 15

    const { name, pokedexNumber, generation, legendary, }: IFilters = request.query;
    const findPokemonsUseCase = container.resolve(FindPokemonsUseCase);

    const pokemons = await findPokemonsUseCase.execute({page, limit}, {
      name: name,
      pokedexNumber: pokedexNumber,
      generation: generation,
      legendary: legendary,
    });

    return response.status(200).json(pokemons);
  }
}

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindPokemonsUseCase, IFilters } from '../useCases/FindPokemons.use-case';
import { name } from 'ts-jest/dist/transformers/hoist-jest';

export class FindPokemonsController {
  async handle(request: Request, response: Response) {
    const { name, pokedexNumber, generation, legendary, }: IFilters = request.query;
    const findPokemonsUseCase = container.resolve(FindPokemonsUseCase);

    const pokemons = await findPokemonsUseCase.execute({
      name: name,
      pokedexNumber: pokedexNumber,
      generation: generation,
      legendary: legendary,
    });

    return response.status(201).json(pokemons);
  }
}

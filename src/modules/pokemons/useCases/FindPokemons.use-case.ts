import 'reflect-metadata';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { IPokemonsRepository } from '../IPokemonsRepository';

export interface IFilters {
  name: string,
  pokedexNumber: number,
  generation: number,
  legendary: number,
}

@injectable()
export class FindPokemonsUseCase {
  constructor(
    @inject('PokemonsRepository')
    private pokemonsRepository: IPokemonsRepository,
  ) {}

  async execute(data: IFilters | null) {
    return await this.pokemonsRepository.findPokemons(data);
  }
}

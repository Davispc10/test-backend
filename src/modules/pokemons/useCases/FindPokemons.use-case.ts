import 'reflect-metadata';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { IPokemonsRepository } from '../IPokemonsRepository';

@injectable()
export class FindPokemonsUseCase {
  constructor(
    @inject('PokemonsRepository')
    private pokemonsRepository: IPokemonsRepository,
  ) {}

  async execute() {
    return await this.pokemonsRepository.findPokemons(null);
  }
}

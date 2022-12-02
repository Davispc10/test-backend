import 'reflect-metadata';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { IPokemonsRepository } from '../IPokemonsRepository';
import { Pokemon } from '../typeorm/entities/Pokemon';

export interface IFilters {
  name: string,
  pokedexNumber: number,
  generation: number,
  legendary: number,
}

export interface IPaginatePokemons {
  per_page: number,
  total: number,
  current_page: number,
  data: Pokemon[],
}

interface SearchParams {
  page: number;
  limit: number;
}

@injectable()
export class FindPokemonsUseCase {
  constructor(
    @inject('PokemonsRepository')
    private pokemonsRepository: IPokemonsRepository,
  ) {}

  async execute({page, limit}: SearchParams, data: IFilters | null): Promise<Pokemon[] | IPaginatePokemons | null> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const pokemons = await this.pokemonsRepository.findPokemons({page, skip, take}, data)
    return pokemons
  }
}

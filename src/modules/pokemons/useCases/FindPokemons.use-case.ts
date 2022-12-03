import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IPokemonsRepository } from '../IPokemonsRepository';
import { Pokemon } from '../typeorm/entities/Pokemon';
import IPokemonPaginate from '../IPokemonPaginate';

export interface IFilters {
  name: string | undefined;
  pokedexNumber: number;
  generation: number;
  legendary: number;
  type1: string;
  weather1: string;
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

  async execute(
    { page, limit }: SearchParams,
    data: IFilters | null,
  ): Promise<Pokemon[] | IPokemonPaginate | null> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    return await this.pokemonsRepository.findPokemons(
      { page, skip, take },
      data,
    );
  }
}

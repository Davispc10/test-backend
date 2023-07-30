import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryPokemonsRepository } from '../repositories/inMemory/InMemoryPokemonsRepository';
import { FetchPokemonsUseCase } from "./fetchPokemons";

let inMemoryPokemonRepository: InMemoryPokemonsRepository;
let fetchPokemonsUseCase: FetchPokemonsUseCase;

describe('Fetch Pokemons Use Case', () => {
  beforeEach(() => {
    inMemoryPokemonRepository = new InMemoryPokemonsRepository();
    fetchPokemonsUseCase = new FetchPokemonsUseCase(inMemoryPokemonRepository);
  });

  it("should be able to fetch pokemons without filters", async () => {
    await inMemoryPokemonRepository.create({
      generation: 1,
      legendary: 0,
      name: 'Devmander',
      type_1: 'Code',
      type_2: 'Bug',
      pokedex_number: 1,
    });

    await inMemoryPokemonRepository.create({
      generation: 1,
      legendary: 0,
      name: 'Charicode',
      type_1: 'Code',
      type_2: 'Fire',
      pokedex_number: 2,
    });

    const pokemons = await fetchPokemonsUseCase.execute({
      page: 1,
    });

    expect(pokemons).toEqual([
      expect.objectContaining({ name: 'Devmander' }),
      expect.objectContaining({ name: 'Charicode' }),
    ]);
  });
});
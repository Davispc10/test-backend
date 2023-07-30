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

  it("should be able to fetch pokemons with generation filter", async () => {
    await inMemoryPokemonRepository.create({
      generation: 1,
      legendary: 0,
      name: 'Devmander',
      type_1: 'Code',
      type_2: 'Bug',
      pokedex_number: 1,
    });

    await inMemoryPokemonRepository.create({
      generation: 2,
      legendary: 0,
      name: 'Charicode',
      type_1: 'Code',
      type_2: 'Fire',
      pokedex_number: 2,
    });

    const pokemons = await fetchPokemonsUseCase.execute({
      page: 1,
      generation: 1,
    });

    expect(pokemons).toEqual([
      expect.objectContaining({ name: 'Devmander' }),
    ]);
  });

  it("should be able to fetch pokemons with name filter", async () => {
    await inMemoryPokemonRepository.create({
      generation: 1,
      legendary: 0,
      name: 'Devmander',
      type_1: 'Code',
      type_2: 'Bug',
      pokedex_number: 1,
    });

    await inMemoryPokemonRepository.create({
      generation: 2,
      legendary: 0,
      name: 'Charicode',
      type_1: 'Code',
      type_2: 'Fire',
      pokedex_number: 2,
    });

    const pokemons = await fetchPokemonsUseCase.execute({
      page: 1,
      name: 'code',
    });

    expect(pokemons).toEqual([
      expect.objectContaining({ name: 'Charicode' }),
    ]);
  });

  it("should be able to fetch pokemons with both name and generation filter", async () => {
    await inMemoryPokemonRepository.create({
      generation: 1,
      legendary: 0,
      name: 'Devmander',
      type_1: 'Code',
      type_2: 'Bug',
      pokedex_number: 1,
    });

    await inMemoryPokemonRepository.create({
      generation: 2,
      legendary: 0,
      name: 'Charicode',
      type_1: 'Code',
      type_2: 'Fire',
      pokedex_number: 2,
    });

    await inMemoryPokemonRepository.create({
      generation: 2,
      legendary: 0,
      name: 'Charmint',
      type_1: 'Code',
      type_2: 'Fire',
      pokedex_number: 3,
    });

    const pokemons = await fetchPokemonsUseCase.execute({
      page: 1,
      generation: 2,
      name: 'code'
    });

    expect(pokemons).toEqual([
      expect.objectContaining({ name: 'Charicode' }),
    ]);
  });

  it("should be able to fetch 20 items per page", async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryPokemonRepository.create({
        generation: 1,
        legendary: 0,
        name: 'Devmander',
        type_1: 'Code',
        type_2: 'Bug',
        pokedex_number: i,
      });
    }

    const pokemons = await fetchPokemonsUseCase.execute({
      page: 2,
    });

    expect(pokemons).toEqual([
      expect.objectContaining({ pokedex_number: 21 }),
      expect.objectContaining({ pokedex_number: 22 }),
    ]);
  });
});
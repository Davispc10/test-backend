import pokemonRepository from "@/repositories/pokemon-repository";
import { badRequestError, notFoundError } from "@/errors";

async function getPokemons(page: number, pageSize: number, direction: string) {
  verifyPageSize(page);
  
  let pokemons;
  if(!page && !pageSize) {
    pokemons = await pokemonRepository.findAll(direction);
  } else {
    pokemons = await pokemonRepository.findAll(direction, page, pageSize);
  }
  return pokemons;
} 

async function getSortedPokemons(page: number, pageSize: number, sorter: string, direction: string) {
  verifyPageSize(page);
  verifySorter(sorter);

  let pokemons;
  if(!page && !pageSize) {
    pokemons = await pokemonRepository.findAllSorted(sorter, direction);
  } else {
    pokemons = await pokemonRepository.findAllSorted(sorter, direction, page, pageSize);
  }
  return pokemons;
} 

async function getPokemonsByPokedex(pokedexNumber: number) {
  const pokemons = await pokemonRepository.findByPokedex(pokedexNumber);
  if(!pokemons) {
    throw notFoundError();
  }
  return pokemons;
} 

async function getPokemonsByKeyword(keyword: string) {
  const pokemons = await pokemonRepository.findByKeyword(keyword);
  if(!pokemons) {
    throw notFoundError();
  }
  return pokemons;
}

async function getPokemonById(id: number) {
  const pokemon = await pokemonRepository.findById(id);
  if(!pokemon) {
    throw notFoundError();
  }
  return pokemon;
} 

function verifyPageSize(page: number) {
  if(page < 0) {
    throw badRequestError();
  }
}

function verifySorter(sorter: string) {
  if(sorter !== 'atk' && sorter !== 'def' && sorter !== 'statTotal' && sorter !== 'sta' && sorter !== 'pokedexNumber') {
    throw badRequestError();
  }
}

const pokemonService = {
  getPokemons,
  getSortedPokemons,
  getPokemonsByPokedex,
  getPokemonById,
  getPokemonsByKeyword
};
  
export default pokemonService;

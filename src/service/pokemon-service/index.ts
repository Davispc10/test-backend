import pokemonRepository from "@/repositories/pokemon-repository";
import { badRequestError, notFoundError } from "@/errors";
import { pagingError, sorterError } from "./errors";

async function getPokemons(page: number, pageSize: number, direction: string, type: string) {
  verifyPaging(page, pageSize);
  
  let pokemons;
  if(!page && !pageSize) {
    pokemons = await pokemonRepository.findAll(direction, type);
  } else {
    pokemons = await pokemonRepository.findAll(direction, type, page, pageSize);
  }
  return pokemons;
} 

async function getSortedPokemons(page: number, pageSize: number, sorter: string, direction: string, type: string) {
  verifyPaging(page, pageSize);
  verifySorter(sorter);

  let pokemons;
  if(!page && !pageSize) {
    pokemons = await pokemonRepository.findAllSorted(sorter, direction, type);
  } else {
    pokemons = await pokemonRepository.findAllSorted(sorter, direction, type, page, pageSize);
  }
  return pokemons;
} 

async function getPokemonsByPokedex(pokedexNumber: number) {
  if(pokedexNumber < 0 || isNaN(pokedexNumber)) throw badRequestError();

  const pokemons = await pokemonRepository.findByPokedex(pokedexNumber);

  if(!pokemons) throw notFoundError();

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
  if(id < 0 || isNaN(id)) throw badRequestError();

  const pokemon = await pokemonRepository.findById(id);

  if(!pokemon) throw notFoundError();

  return pokemon;
} 

function verifyPaging(page: number, pageSize: number) {
  if(((page || page == 0) && !pageSize) || ((!page && page !== 0) && pageSize)) {
    throw pagingError();
  }
  if(page < 0) {
    throw pagingError();
  }
} 

function verifySorter(sorter: string) {
  if(sorter !== 'atk' && sorter !== 'def' && sorter !== 'statTotal' && sorter !== 'sta' && sorter !== 'pokedexNumber') {
    throw sorterError();
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

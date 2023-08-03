import pokemonRepository from "@/repositories/pokemon-repository";
//import { badRequestError, unauthorizedError } from "@/errors";

async function getPokemons() {
  const workouts = await pokemonRepository.findAll();
  return workouts;
} 

const pokemonService = {
  getPokemons
};
  
export default pokemonService;

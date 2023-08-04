import { getPokemons, getSortedPokemons, getPokemonById, getPokemonsByPokedex, getPokemonsByKeyword } from "@/controllers/index";
import { Router } from "express";

const pokemonRouter = Router();

pokemonRouter
  .all("/*", )
  .get("/", getPokemons)
  .get("/:id", getPokemonById)
  .get("/pokedex/:pokedexNumber", getPokemonsByPokedex)
  .get("/search/:keyword", getPokemonsByKeyword)
  .get("/sortBy/:sorter", getSortedPokemons)
;

export { pokemonRouter };

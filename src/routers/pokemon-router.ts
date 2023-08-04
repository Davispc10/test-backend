import { getPokemons, getSortedPokemons, getPokemonById, getPokemonsByPokedex, getPokemonsByKeyword } from "@/controllers/index";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const pokemonRouter = Router();

pokemonRouter
  .all("/*", authenticateToken)
  .get("/", getPokemons)
  .get("/:id", getPokemonById)
  .get("/pokedex/:pokedexNumber", getPokemonsByPokedex)
  .get("/search/:keyword", getPokemonsByKeyword)
  .get("/sortBy/:sorter", getSortedPokemons)
;

export { pokemonRouter };

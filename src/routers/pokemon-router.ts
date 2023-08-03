import { getPokemons } from "@/controllers/pokemon-controller";
import { Router } from "express";

const pokemonRouter = Router();

pokemonRouter
  .all("/*", )
  .get("/", getPokemons)
;

export { pokemonRouter };

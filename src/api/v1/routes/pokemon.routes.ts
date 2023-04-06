import { Router } from "express";
import PokemonRepository from "../repository/typeorm/PokemonRepository";
import ListPokemonHandler from "../handlers/ListPokemonHandler";
import ListPokemonService from "../service/ListPokemonService";
import GetPokemonHandler from "../handlers/GetPokemonHandler";
import GetPokemonService from "../service/GetPokemonService";
import GetRandomPokemonHandler from "../handlers/GetRandomPokemonHandler";

const pokemonRouter = Router();

const pokemonRepository = new PokemonRepository();

const listPokemonService = new ListPokemonService(pokemonRepository);
const listPokemonHandler = new ListPokemonHandler(listPokemonService);

const getPokemonService = new GetPokemonService(pokemonRepository);
const getPokemonHandler = new GetPokemonHandler(getPokemonService);

const getRandomPokemonHandler = new GetRandomPokemonHandler(
  getPokemonService,
  listPokemonService
);

pokemonRouter.get("/", listPokemonHandler.handle.bind(listPokemonHandler));
pokemonRouter.get(
  "/random",
  getRandomPokemonHandler.handle.bind(getRandomPokemonHandler)
);
pokemonRouter.get(
  "/:idOrName",
  getPokemonHandler.handle.bind(getPokemonHandler)
);

export default pokemonRouter;

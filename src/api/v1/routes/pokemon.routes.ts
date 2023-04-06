import { Router } from "express";
import PokemonRepository from "../repository/typeorm/PokemonRepository";
import ListPokemonHandler from "../handlers/ListPokemonHandler";
import ListPokemonService from "../service/ListPokemonService";
import GetPokemonHandler from "../handlers/GetPokemonHandler";
import GetPokemonService from "../service/GetPokemonService";
import GetRandomPokemonHandler from "../handlers/GetRandomPokemonHandler";
import CreateBattleService from "../service/CreateBattleService";
import CreateBattleHandler from "../handlers/CreateBattleHandler";

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

const createBattleService = new CreateBattleService();
const createBattleHandler = new CreateBattleHandler(
  createBattleService,
  getPokemonService
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
pokemonRouter.post(
  "/battle",
  createBattleHandler.handle.bind(createBattleHandler)
);

export default pokemonRouter;

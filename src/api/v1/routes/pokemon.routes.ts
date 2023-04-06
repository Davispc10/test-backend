import { Router } from "express";
import PokemonRepository from "../repository/typeorm/PokemonRepository";
import ListPokemonHandler from "../handlers/ListPokemonHandler";
import ListPokemonService from "../service/ListPokemonService";
import GetPokemonHandler from "../handlers/GetPokemonHandler";
import GetPokemonService from "../service/GetPokemonService";
import GetRandomPokemonHandler from "../handlers/GetRandomPokemonHandler";
import CreateBattleService from "../service/CreateBattleService";
import CreateBattleHandler from "../handlers/CreateBattleHandler";
import { AppDataSource } from "../../../database/data-source";
import Pokemon from "../entity/Pokemon";

const pokemonRouter = Router();

const dataSource = AppDataSource.getRepository(Pokemon);
const pokemonRepository = new PokemonRepository(dataSource);

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

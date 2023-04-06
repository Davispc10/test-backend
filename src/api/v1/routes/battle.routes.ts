import { Router } from "express";
import CreateBattleService from "../service/CreateBattleService";
import CreateBattleHandler from "../handlers/CreateBattleHandler";
import GetPokemonService from "../service/GetPokemonService";
import PokemonRepository from "../repository/typeorm/PokemonRepository";
import { AppDataSource } from "../../../database/data-source";
import Pokemon from "../entity/Pokemon";

const battleRouter = Router();

const dataSource = AppDataSource.getRepository(Pokemon);
const pokemonRepository = new PokemonRepository(dataSource);

const getPokemonService = new GetPokemonService(pokemonRepository);

const createBattleService = new CreateBattleService();
const createBattleHandler = new CreateBattleHandler(
  createBattleService,
  getPokemonService
);

battleRouter.post("/", createBattleHandler.handle.bind(createBattleHandler));

export default battleRouter;

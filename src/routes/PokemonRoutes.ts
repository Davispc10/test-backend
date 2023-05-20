import express from "express";
import { PokemonInformationsController } from "../controllers/PokemonInformationsController";
import { PokemonInformationsFacadeImpl } from "../facades/impl/PokemonInformationsFacadeImpl";
import { PokemonInformationsServiceImpl } from "../services/impl/PokemonServiceImpl";

export const pokemonRoutes = express.Router();

const pokemonService = new PokemonInformationsServiceImpl();
const pokemonFacade = new PokemonInformationsFacadeImpl(pokemonService);
const pokemonInformationsController = new PokemonInformationsController(pokemonFacade);

pokemonRoutes.get("/", pokemonInformationsController.getAll.bind(pokemonInformationsController));
pokemonRoutes.get("/:id", pokemonInformationsController.getById.bind(pokemonInformationsController));
pokemonRoutes.post("/", pokemonInformationsController.save.bind(pokemonInformationsController));
pokemonRoutes.put("/:id", pokemonInformationsController.update.bind(pokemonInformationsController));
pokemonRoutes.delete("/:id", pokemonInformationsController.deleteById.bind(pokemonInformationsController));

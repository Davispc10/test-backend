import express from "express";
import { PokemonController } from "../controllers/PokemonController";
import { PokemonFacadeImpl } from "../facades/impl/PokemonFacadeImpl";
import { PokemonServiceImpl } from "../services/impl/PokemonServiceImpl";

export const pokemonRoutes = express.Router();

const pokemonService = new PokemonServiceImpl();
const pokemonFacade = new PokemonFacadeImpl(pokemonService);
const pokemonController = new PokemonController(pokemonFacade);

pokemonRoutes.get("/", pokemonController.getAll.bind(pokemonController));
pokemonRoutes.get("/:id", pokemonController.getById.bind(pokemonController));
pokemonRoutes.post("/", pokemonController.save.bind(pokemonController));
pokemonRoutes.put("/:id", pokemonController.update.bind(pokemonController));
pokemonRoutes.delete("/:id", pokemonController.deleteById.bind(pokemonController));

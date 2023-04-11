import { Router } from "express";
import { SheetService } from "../services/sheet.service";
import { PokemonController } from "../controllers/pokemon.controller";
import { PokemonService } from "../services/pokemon.service";


const sheetService : SheetService = new SheetService();
const pokemonService : PokemonService = new PokemonService();
const pokemonController: PokemonController = new PokemonController(sheetService, pokemonService);
const router: Router = Router();

// Rota base da api, contem apenas informações básicas
router.get('/', pokemonController.home);

// Rota para listagem de todos os registros
router.get('/pokemon', pokemonController.list.bind(pokemonController));

// Rota para listagem com filtros dos registros
router.get('/pokemon/filter', pokemonController.list.bind(pokemonController));

// Rota para leitura da planilha e ingestão para o banco de dados
router.post('/pokemon/read', pokemonController.readSheet.bind(pokemonController));

export { router };
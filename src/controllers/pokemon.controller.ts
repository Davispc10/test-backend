import { Request, Response } from "express";
import { SheetService } from "../services/sheet.service";
import { PokemonService } from "../services/pokemon.service";
import { SaveResponse } from "../interfaces/saveresponse.interface";
import { Pokemon } from "../entities/Pokemon.entity";
import { PokemonFilter } from "../dtos/pokemonfilter.dto";


export class PokemonController {
  private sheetService: SheetService;
  private pokemonService: PokemonService;

  constructor(sheetService: SheetService, pokemonService: PokemonService) {
    this.sheetService = sheetService;
    this.pokemonService = pokemonService;
  }

  /**
   * Método utilizado para receber a requisição 
   * @param req 
   * @param res 
   * @returns Promise<Response | null>
   */
  public async readSheet(req: Request, res: Response): Promise<Response | null> {
    const readingResult = await this.sheetService.readSheet();
    var savingResult: SaveResponse[];
    var statusCode: number;
    var bodyResult;
    if ('error' in readingResult) {
      statusCode = 500;
      bodyResult = readingResult;
    } else {
      savingResult = await this.pokemonService.insertRows(readingResult);
      statusCode = savingResult.length ? 207 : 201;
      bodyResult = savingResult;
    }
    return res.status(statusCode).json(savingResult);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const filters: PokemonFilter = req.query;
    const results: Pokemon[] = await this.pokemonService.list(filters);
    return res.status(200).json({ results });
  }

  public home(req: Request, res: Response) {
    const welcome = {
      message: 'Bem-vindo à Poke-API',
      version: '1.0.0',
      author: "Felipe Marques",
      license: "MIT",
      repository: {
        type: "git",
        url: "https://github.com/felipedv12/poke-api.git"
      }
    }
    return res.status(200).json(welcome);
  }
}
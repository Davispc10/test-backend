import { Request, Response } from "express";
import ListPokemonService from "../service/ListPokemonService";
import { PokemonFilter } from "../domain";

class ListPokemonHandler {
  constructor(private listPokemon: ListPokemonService) {}

  public async handle(req: Request, res: Response) {
    const { page, limit } = req.query;

    const filters: PokemonFilter = {
      generation: req.query.generation
        ? parseInt(req.query.generation as string)
        : undefined,
      type: req.query.type as string,
      weather: req.query.weather as string,
      legendary: req.query.legendary
        ? (req.query.legendary as string).toLowerCase() === "true"
        : undefined,
    };

    const pageNumber = page ? parseInt(page as string) : 1;
    const limitNumber = limit ? parseInt(limit as string) : 20;

    const pokemon = await this.listPokemon.execute(
      filters,
      pageNumber,
      limitNumber
    );

    res.json(pokemon);
  }
}

export default ListPokemonHandler;

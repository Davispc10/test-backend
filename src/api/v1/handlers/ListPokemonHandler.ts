import { Request, Response } from "express";
import ListPokemonService from "../service/ListPokemonService";

class ListPokemonHandler {
  constructor(private listPokemon: ListPokemonService) {}

  public async handle(req: Request, res: Response) {
    const { page, limit } = req.query;

    const pageNumber = page ? parseInt(page as string) : 1;
    const limitNumber = limit ? parseInt(limit as string) : 20;

    const pokemon = await this.listPokemon.execute(pageNumber, limitNumber);

    res.json(pokemon);
  }
}

export default ListPokemonHandler;

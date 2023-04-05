import { Request, Response } from "express";
import GetPokemonService from "../service/GetPokemonService";

class GetPokemonHandler {
  constructor(private getPokemon: GetPokemonService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { idOrName } = req.params;

    const pokemon = await this.getPokemon.execute(idOrName);

    return res.json(pokemon);
  }
}

export default GetPokemonHandler;

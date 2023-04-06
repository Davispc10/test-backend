import { Request, Response } from "express";
import GetPokemonService from "../service/GetPokemonService";
import ListPokemonService from "../service/ListPokemonService";

class GetRandomPokemonHandler {
  constructor(
    private getPokemon: GetPokemonService,
    private listPokemon: ListPokemonService
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const pokemonData = await this.listPokemon.execute({}, 1, 20);

    const randId = Math.floor(Math.random() * pokemonData.count).toString();

    const pokemon = await this.getPokemon.execute(randId);

    return res.json(pokemon);
  }
}

export default GetRandomPokemonHandler;

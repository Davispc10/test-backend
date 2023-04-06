import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import GetPokemonService from '../service/GetPokemonService';
import { TYPES } from '../types';

@injectable()
class GetPokemonHandler {
  constructor(@inject(TYPES.GetPokemonService) private getPokemon: GetPokemonService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { idOrName } = req.params;

    const pokemon = await this.getPokemon.execute(idOrName);

    return res.json(pokemon);
  }
}

export default GetPokemonHandler;

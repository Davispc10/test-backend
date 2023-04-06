import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import AppError from '../errors/AppError';
import CreateBattleService from '../service/CreateBattleService';
import GetPokemonService from '../service/GetPokemonService';
import { TYPES } from '../types';

@injectable()
class CreateBattleHandler {
  constructor(
    @inject(TYPES.CreateBattleService)
    private createBattle: CreateBattleService,

    @inject(TYPES.GetPokemonService)
    private getPokemon: GetPokemonService
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { pokemon1, pokemon2 } = req.body;

    if (!pokemon1 || !pokemon2) {
      throw new AppError('Both Pokémon are required for battles.', 400);
    }

    const pokemon1Data = await this.getPokemon.execute(pokemon1);
    const pokemon2Data = await this.getPokemon.execute(pokemon2);

    const winner = this.createBattle.execute(pokemon1Data, pokemon2Data);

    const battleResponse = {
      contestant1: pokemon1Data.toString(),
      contestant2: pokemon2Data.toString(),
      battle: `Pokémon Battle: ${pokemon1Data.name} vs ${pokemon2Data.name}!`,
      result: `${winner} wins the battle!`,
    };

    return res.json(battleResponse);
  }
}

export default CreateBattleHandler;

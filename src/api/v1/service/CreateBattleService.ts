import { Battle } from "../domain";
import Pokemon from "../entity/Pokemon";
import IService from "./IService";

class CreateBattleService implements IService {
  constructor() {}

  execute(pokemon1: Pokemon, pokemon2: Pokemon): string {
    const battle = new Battle(pokemon1, pokemon2);

    return battle.getWinner();
  }
}

export default CreateBattleService;

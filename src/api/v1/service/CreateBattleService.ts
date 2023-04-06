import { Battle } from "../domain";
import Pokemon from "../entity/Pokemon";

class CreateBattleService {
  constructor() {}

  execute(pokemon1: Pokemon, pokemon2: Pokemon): string {
    const battle = new Battle(pokemon1, pokemon2);

    return battle.getWinner();
  }
}

export default CreateBattleService;

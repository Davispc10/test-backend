import Pokemon from "../entity/Pokemon";

class Battle {
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {}

  private typeAdvantages: Record<string, string[]> = {
    Normal: [],
    Fire: ["Grass", "Ice", "Bug", "Steel"],
    Water: ["Fire", "Ground", "Rock"],
    Electric: ["Water", "Flying"],
    Grass: ["Water", "Ground", "Rock"],
    Ice: ["Grass", "Ground", "Flying", "Dragon"],
    Fighting: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    Poison: ["Grass", "Fairy"],
    Ground: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    Flying: ["Grass", "Fighting", "Bug"],
    Psychic: ["Fighting", "Poison"],
    Bug: ["Grass", "Psychic", "Dark"],
    Rock: ["Fire", "Ice", "Flying", "Bug"],
    Ghost: ["Psychic", "Ghost"],
    Dragon: ["Dragon"],
    Dark: ["Psychic", "Ghost"],
    Steel: ["Ice", "Rock", "Fairy"],
    Fairy: ["Fighting", "Dragon", "Dark"],
  };

  getWinner(): string {
    const score1 = this.calculateScore(this.pokemon1, this.pokemon2);
    const score2 = this.calculateScore(this.pokemon2, this.pokemon1);

    return score1 > score2 ? this.pokemon1.name : this.pokemon2.name;
  }

  private calculateScore(pokemon: Pokemon, opponent: Pokemon): number {
    const typeBonus = this.calculateTypeBonus(pokemon, opponent);
    const evolutionBonus = pokemon.evolved ? 2 : 1;
    const legendaryBonus = pokemon.legendary ? 2 : 1;

    const score =
      (pokemon.stat_total + pokemon.atk + pokemon.def + pokemon.sta) *
      typeBonus *
      evolutionBonus *
      legendaryBonus;

    return score;
  }

  private calculateTypeBonus(pokemon: Pokemon, opponent: Pokemon): number {
    const typeOneBonus = this.typeAdvantages[pokemon.type_one]?.includes(
      opponent.type_one
    )
      ? 1.5
      : 1;
    const typeTwoBonus =
      pokemon.type_two &&
      this.typeAdvantages[pokemon.type_two]?.includes(opponent.type_one)
        ? 1.5
        : 1;

    return typeOneBonus * typeTwoBonus;
  }
}

export default Battle;

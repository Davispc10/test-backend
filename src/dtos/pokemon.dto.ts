export interface PokemonDTO {
  row: number;
  
  name: string;

  pokedexNumber: number;

  imgName: string;

  generation: number;

  evolutionStage: number;

  isEvolved: boolean;

  familyID: number;

  isCrossGen: boolean;

  type1: string;

  type2: string;

  weather1: string;

  weather2: string;

  statTotal: number;

  atk: number;

  def: number;

  sta: number;

  legendary: number;

  aquireable: number;

  spawns: boolean;

  isRegional: boolean;

  raidable: number;

  hatchable: number;

  isShiny: boolean;

  isNest: boolean;

  isNew: boolean;

  isNotGettable: boolean;

  isFutureEvolve: boolean;

  cp40: number;

  cp39: number;
}
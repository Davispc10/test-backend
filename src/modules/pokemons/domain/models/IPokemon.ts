export interface IPokemon {
  information: {
    name: string;
    pokedexNumber: number;
    imgName: string;
    generation: number;
    evolutionStage: string;
    evolved: number;
    familyId: number;
    crossGen: number;
  };

  type_weather: {
    pokedexNumber: number;
    type1: string;
    type2: string;
    weather1: string;
    weather2: string;
  };

  fighting_attributes: {
    pokedexNumber: number;
    statTotal: number;
    atk: number;
    def: number;
    sta: number;
    cp100e40: number;
    cp100e39: number;
  };

  additional_information: {
    pokedexNumber: number;
    legendary: number;
    acquirable: number;
    spawns: number;
    regional: number;
    raidable: number;
    hatchable: number;
    shiny: number;
    nest: number;
    new: number;
    notGettable: number;
    futureEvolve: number;
  };
}

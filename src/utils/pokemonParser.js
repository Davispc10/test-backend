const parserPokemonData = (pokemon) => {
  try {
    return {
      name: pokemon['Name'],
      pokedexNumber: pokemon['Pokedex Number'],
      imgName: pokemon['Img name'],
      generation: pokemon['Generation'],
      evolutionStage: pokemon['Evolution Stage'],
      evolved: pokemon['Evolved'] ? true : false,
      familyId: pokemon['FamilyID'],
      crossGeneration: pokemon['Cross Gen'] ? true : false,
      type1: pokemon['Type 1'],
      type2: pokemon['Type 2'],
      weather1: pokemon['Weather 1'],
      weather2: pokemon['Weather 2'],
      totalStat: pokemon['STAT TOTAL'],
      atk: pokemon['ATK'],
      def: pokemon['DEF'],
      sta: pokemon['STA'],
      legendary: pokemon['Legendary'],
      acquirable: pokemon['Aquireable'],
      spawns: pokemon['Spawns'] ? true : false,
      regional: pokemon['Regional'] ? true : false,
      raidable: pokemon['NameRaidable'],
      hatchable: pokemon['Hatchable'],
      shiny: pokemon['Shiny'] ? true : false,
      nest: pokemon['Nest'] ? true : false,
      new: pokemon['New'] ? true : false,
      notGettable: pokemon['Not-Gettable'] ? true : false,
      futureEvolve: pokemon['Future Evolve'] ? true : false,
      cp40: pokemon['100% CP @ 40'],
      cp39: pokemon['100% CP @ 39'],
    };
  } catch (error) {
    return null;
  }
};

module.exports = parserPokemonData;

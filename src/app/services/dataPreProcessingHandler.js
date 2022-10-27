class DataProcessing {
  static preProcessing(dataArray) {
    dataArray.shift();
    const pokemons = [];
    dataArray.forEach((row) => {
      const pokemon = {
        name: row[1],
        pokedexNumber: row[2],
        imgName: row[3],
        generation: row[4],
        evolutionStage: row[5],
        evolved: row[6],
        familyId: row[7],
        crossGen: row[8],
        typeOne: row[9],
        typeTwo: row[10],
        weatherOne: row[11],
        weatherTwo: row[12],
        totalStat: row[13],
        atk: row[14],
        def: row[15],
        sta: row[16],
        legendary: row[17],
        aquirable: row[18],
        spawns: row[19],
        regional: row[20],
        raidable: row[21],
        hatchable: row[22],
        shiny: row[23],
        nest: row[24],
        new: row[25],
        notGettable: row[26],
        futureEvolve: row[27],
        fullCPAt40: row[28],
        fullCPAt39: row[29],
      };
      pokemons.push(pokemon);
    });
    return pokemons;
  }
}

export default DataProcessing;

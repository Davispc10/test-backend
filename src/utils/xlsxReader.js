const { resolve } = require('path');
const reader = require('xlsx');
const pokemonParser = require('./pokemonParser');

const getPokemonSeedFromXlsx = () => {
  const file = reader.readFile(resolve('./Pokemon Go.xlsx'));
  const pokemonList = [];

  const sheets = file.SheetNames;

  for (let i = 0; i < sheets.length; i++) {
    const temporary = reader.utils.sheet_to_json(
      file.Sheets[file.SheetNames[i]]
    );
    temporary.forEach((res) => {
      const parsedPokemon = pokemonParser(res);

      if (parsedPokemon) {
        pokemonList.push(parsedPokemon);
      }
    });
  }

  return pokemonList;
};

module.exports = getPokemonSeedFromXlsx;

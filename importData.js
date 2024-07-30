require('dotenv').config({ path: '.env' });
const path = require('path');
const XLSX = require('xlsx');
const sequelize = require('./src/config/database');
const Pokemon = require('./src/models/pokemonModel');

async function importData() {
  try {
    
    await sequelize.sync({ force: true });

    const filePath = path.resolve(__dirname, 'PokemonGO.xlsx');
    
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    const toBoolean = (value) => value === 1 ? true : false;
    const toInteger = (value) => {
      if (value === 'evolved') return 3;
      if (value === 'lower' || value === '' || value === null || value === undefined) return 0;
      return isNaN(value) ? 0 : parseInt(value, 10);
    };

    const pokemons = data.map(row => ({
      name: row['Name'],
      pokedexNumber: toInteger(row['Pokedex Number']),
      imgName: row['Img name'],
      generation: toInteger(row['Generation']),
      evolutionStage: row['Evolution Stage'],
      evolved: toBoolean(row['Evolved']),
      familyID: toInteger(row['FamilyID']),
      crossGen: toBoolean(row['Cross Gen']),
      type1: row['Type 1'],
      type2: row['Type 2'],
      weather1: row['Weather 1'],
      weather2: row['Weather 2'],
      statTotal: toInteger(row['STAT TOTAL']),
      atk: toInteger(row['ATK']),
      def: toInteger(row['DEF']),
      sta: toInteger(row['STA']),
      legendary: toBoolean(row['Legendary']),
      aquireable: toBoolean(row['Aquireable']),
      spawns: toBoolean(row['Spawns']),
      regional: toBoolean(row['Regional']),
      raidable: toBoolean(row['Raidable']),
      hatchable: toBoolean(row['Hatchable']),
      shiny: toBoolean(row['Shiny']),
      nest: toBoolean(row['Nest']),
      new: toBoolean(row['New']),
      notGettable: toBoolean(row['Not-Gettable']),
      futureEvolve: toBoolean(row['Future Evolve']),
      cp40: toInteger(row['100% CP @ 40']),
      cp39: toInteger(row['100% CP @ 39']),
    }));

    const BATCH_SIZE = 165;

    for (let i = 0; i < pokemons.length; i += BATCH_SIZE) {
      const batch = pokemons.slice(i, i + BATCH_SIZE);
      console.log(`Importando lote ${Math.floor(i / BATCH_SIZE) + 1}`);
      try {
        await sequelize.transaction(async (transaction) => {
          await Pokemon.bulkCreate(batch, { transaction });
        });
        console.log(`Lote ${Math.floor(i / BATCH_SIZE) + 1} importado com sucesso!`);
      } catch (error) {
        console.error(`Erro ao importar lote ${Math.floor(i / BATCH_SIZE) + 1}:`, error);
        console.error(`Valores do lote problemático: ${JSON.stringify(batch)}`);
        break; 
      }
    }

    console.log('Importação de dados concluída com sucesso!');
  } catch (error) {
    console.error('Erro ao importar dados:', error);
  } finally {
    await sequelize.close();
  }
}

importData();

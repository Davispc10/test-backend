import ExcelReader from '../../app/services/xlsxLoadHandler';
import DataProcessing from '../../app/services/dataPreProcessingHandler';
import '../../database';
import Pokemon from '../../app/models/pokemon';

class DbPopulate {
  static async init(dataPath) {
    const count = await Pokemon.count();

    if (count) {
      console.log('Error: only empty tables can be populated by this method.');
    } else {
      const dataArray = await ExcelReader.loadFile(dataPath);
      const pokemonsData = await DataProcessing.preProcessing(dataArray);
      await Pokemon.bulkCreate(pokemonsData);
      console.log('Database successfully populated.');
    }
  }
}

DbPopulate.init('./database/data');

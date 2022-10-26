import ExcelReader from '../../app/services/xlsxLoadHandler';
import '../../database';
import Pokemon from '../../app/models/pokemon';

ExcelReader.loadFile('./database/data').then((pokemonsData) => {
  Pokemon.bulkCreate(pokemonsData)
    .then(() => {
      console.log('Database successfully populated.');
    })
    .catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        console.log('Database is already populated.');
      } else {
        console.log(error);
      }
    });
});

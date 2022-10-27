import readXlsxFile from 'read-excel-file/node';
import path from 'path';
import fs from 'fs';

class ExcelReader {
  static async loadFile(relativeDirPath) {
    const dataDir = path.resolve(__dirname, '../', '../', relativeDirPath);
    const dbFile = fs.readdirSync(dataDir).filter((file) => {
      return path.extname(file).toLowerCase() === '.xlsx';
    })[0];
    const dataPath = path.resolve(dataDir, dbFile);

    const dataArray = await readXlsxFile(dataPath);

    return dataArray;
  }
}

export default ExcelReader;

import { Sequelize } from 'sequelize';
import config from '../config/database';
import path from 'path';
import fs from 'fs';

const modelsDir = path.resolve('.', 'src/app/models');

const modelFiles = fs.readdirSync(modelsDir).filter((file) => {
  return path.extname(file).toLowerCase() === '.js';
});

const models = [];
modelFiles.forEach((file) => {
  const model = require(path.join(modelsDir, file));
  models.push(model.default);
});

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.connection = new Sequelize(config.database, config.username, config.password, config);
    models.forEach((model) => {
      model.init(this.connection);
    });
  }
}

export default new Database();

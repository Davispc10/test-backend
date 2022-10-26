import express from 'express';
import pokemonRoutes from './app/routes/pokemonRoutes';

import './config/environment';

import './database';

class Application {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(pokemonRoutes);
  }
}

export default new Application().server;

import { CreatePokemonLoaderService } from '@/data/services';
import { AppDataSource } from '@/infra/data-sources/typeorm'
import { setupRoutes } from '@/main/config/routes'
import express from 'express';
import { TypeOrmPokemonRepository } from '@/infra/repositories';

AppDataSource.initialize()
.then(async () => {
    console.log("Data Source has been initialized!")

    const pokemonRepository = new TypeOrmPokemonRepository();

    const createPokemonLoaderService = new CreatePokemonLoaderService(pokemonRepository);

    await createPokemonLoaderService.load();
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
});


const app = express();
setupRoutes(app);

export default app;

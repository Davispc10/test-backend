import "dotenv/config";
import express from "express";
import { AppDataSource } from "./database-config/data-source";
import { pokemonRoutes } from "./routes/PokemonRoutes";
import { uploadFileRoutes } from "./routes/UploadFileRoutes";

const app = express();
AppDataSource.initialize()
  .then(() => {
    console.log("db initialized");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", uploadFileRoutes);
app.use("/pokemons", pokemonRoutes);

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

import "dotenv/config";
import express from "express";
import { pokemonRoutes } from "./routes/PokemonRoutes";
import { uploadFileRoutes } from "./routes/UploadFileRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", uploadFileRoutes);
app.use("/pokemons", pokemonRoutes);

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

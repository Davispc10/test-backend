import { Router } from "express";
import pokemonRouter from "./pokemon.routes";
import battleRouter from "./battle.routes";

const router = Router();

router.use("/pokemon", pokemonRouter);
router.use("/battle", battleRouter);

export default router;

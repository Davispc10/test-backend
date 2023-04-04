import { Router } from 'express';
import pokemonRouter from './pokemon.routes';

const router = Router();

router.use("/pokemon", pokemonRouter)

export default router;
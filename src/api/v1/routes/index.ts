import { Router } from 'express';
import battleRouter from './battle.routes';
import pokemonRouter from './pokemon.routes';

const router = Router();

router.use('/pokemon', pokemonRouter);
router.use('/battle', battleRouter);

export default router;

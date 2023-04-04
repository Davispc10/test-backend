import { Router, Request, Response } from 'express';
import PokemonRepository from '../repositories/typeorm/PokemonRepository';

const pokemonRouter = Router();

pokemonRouter.get('/', async (req: Request, res: Response) => {
    const page: string | undefined = req.query.name as string | undefined;
    const limit: string | undefined = req.query.limit as string | undefined;
    
    const pageNumber = page ? parseInt(page) : 1;
    const limitNumber = limit ? parseInt(limit) : 20;

    const repo = new PokemonRepository()
    
    const pokemon = await repo.index(pageNumber, limitNumber)  
    res.json(pokemon);
});

pokemonRouter.get('/:idOrName', async (req: Request, res: Response) => {
    const idOrName = req.params.idOrName

    const repo = new PokemonRepository()
    
    if (isNaN(parseInt(idOrName))) {
        const pokemon = await repo.findByName(idOrName)  
        res.json(pokemon);
        return
    }

    const pokemon = await repo.findById(parseInt(idOrName))  
    res.json(pokemon);
});


export default pokemonRouter;
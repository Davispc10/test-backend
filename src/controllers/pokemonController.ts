import { Request, Response, Router } from 'express'
import { searchPokemons } from '../services/searchService'

export const router = Router()

router.get('/pokemons', async (req: Request, res: Response) => {
    try{
        const pokemons = await searchPokemons.getAll().then(pokemons => {
            return pokemons
        })
        if(pokemons) {
            res.status(200).json({
                pokemons
            })
        } else {
            res.status(404)
        }
    } catch(error){
        res.status(500).json({error})
    }
})

router.get('/:name', async (req: Request, res: Response) => {
    const { name } = req.params
    try{
        const pokemon = await searchPokemons.findByName(name).then(pokemon => {
            return pokemon
        })
        if(pokemon) {
            res.status(200).json({
                pokemon 
            })
        } else {
            res.status(404)
        }
    } catch(error){
        res.status(500).json({error})
    }
})

router.post('/page', async (req: Request, res: Response) => {
    const { page, pageSize } = req.body;
    try{
        const pokemons = await searchPokemons.findPage(page, pageSize)

        if(pokemons) {
            res.status(200).json({
                pokemons
            })
        } else {
            res.status(404)
        }
    } catch(error){
        res.status(500).json({error})
    }
})

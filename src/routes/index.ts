import { Router } from 'express';
import { prisma } from '../lib/prisma';

export const routes = Router();

routes.get('/pokemons', async (request, response) => {
  const pokemons = await prisma.pokemon.findMany({
    take: 20,
  });

  return response.json({
    pokemons,
  })
});
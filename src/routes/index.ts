import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export const routes = Router();

routes.get('/pokemons', async (request, response) => {
  const requestQuerySchema = z.object({
    page: z.string().transform((p) => {
      if (Number(p) <= 0) return 1;

      return Number(p);
    }),
    generation: z.string().transform((gen) => {
      const genNumber = Number(gen);
      return isNaN(genNumber) || genNumber <= 0 ? undefined : genNumber;
    }),
  });

  const { page, generation } = requestQuerySchema.parse(request.query);

  const pokemons = await prisma.pokemon.findMany({
    orderBy: {
      pokedex_number: 'asc',
    },
    where: {
      generation,
    },
    take: 20,
    skip: (page - 1) * 20,
  });

  return response.json({
    pokemons,
  })
});
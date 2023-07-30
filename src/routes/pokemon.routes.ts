import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export const pokemonRoutes = Router();

pokemonRoutes.get('/', async (request, response) => {
  const requestQuerySchema = z.object({
    page: z.string().transform((p) => {
      if (Number(p) <= 0) return 1;

      return Number(p);
    }),
    generation: z.string().transform((gen) => {
      const genNumber = Number(gen);
      return isNaN(genNumber) || genNumber <= 0 ? undefined : genNumber;
    }),
    name: z.string().transform((text) => {
      return text.length === 0 ? undefined : text;
    }),
  });

  const { page, generation, name } = requestQuerySchema.parse(request.query);

  const pokemons = await prisma.pokemon.findMany({
    orderBy: {
      pokedex_number: 'asc',
    },
    where: {
      generation,
      name: {
        contains: name,
      }
    },
    take: 20,
    skip: (page - 1) * 20,
  });

  return response.json({
    pokemons,
  })
});

pokemonRoutes.post('/', async (request, response) => {
  const requestBodySchema = z.object({
    name: z.string(),
    generation: z.number(),
    pokedexNumber: z.number(),
    type1: z.string(),
    type2: z.string(),
    legendary: z.number(),
  });

  const {
    name,
    generation,
    pokedexNumber,
    type1,
    type2,
    legendary,
  } = requestBodySchema.parse(request.body);

  const pokedexSlotTaken = await prisma.pokemon.findFirst({
    where: {
      pokedex_number: pokedexNumber,
    }
  });

  if (pokedexSlotTaken) {
    return response.status(400).json({
      message: 'Pokedex slot already taken',
    });
  }

  const pokemon = await prisma.pokemon.create({
    data: {
      name,
      generation,
      type_1: type1,
      type_2: type2,
      pokedex_number: pokedexNumber,
      legendary,
    }
  });

  return response.status(201).json({
    pokemon,
  })
});

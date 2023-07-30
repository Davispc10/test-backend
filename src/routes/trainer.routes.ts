import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export const trainerRoutes = Router();

trainerRoutes.post('/', async (request, response) => {
  const requestBodySchema = z.object({
    nickname: z.string(),
    password: z.string().min(6),
  });

  try {
    const { nickname, password } = requestBodySchema.parse(request.body);

    const existingTrainer = await prisma.trainer.findUnique({
      where: {
        nickname,
      }
    });

    if (existingTrainer) {
      return response.status(400).json({
        error: 'Already used nickname',
      });
    }

    const trainer = await prisma.trainer.create({
      data: {
        nickname,
        password,
      }
    });

    return response.json({
      trainer,
    });
  } catch (err) {
    return response.status(500).json({
      error: err.message,
    });
  }
});

trainerRoutes.delete('/:id', async (request, response) => {
  const requestParamsSchema = z.object({
    id: z.string().uuid(),
  });

  try {
    const { id } = requestParamsSchema.parse(request.params);

    const trainer = await prisma.trainer.findUnique({
      where: {
        id,
      }
    });

    if (!trainer) {
      return response.status(404).json({
        message: 'Trainer not registred',
      });
    }

    await prisma.trainer.delete({
      where: {
        id,
      }
    });

    return response.status(204).send();
  } catch (err) {
    return response.status(500).json({
      error: err.message,
    });
  }
});

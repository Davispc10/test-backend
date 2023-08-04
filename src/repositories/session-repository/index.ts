import { prisma } from '../../database/client';
import { Prisma } from "@prisma/client";

async function create(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}

async function find(token: string) {
  return prisma.session.findFirst({
    where: {
      token
    },
  });
}

async function deleteSession(id: number) {
  return prisma.session.delete({
    where: {
      id
    },
  });
}

const sessionRepository = {
  create,
  find,
  deleteSession
};

export default sessionRepository;

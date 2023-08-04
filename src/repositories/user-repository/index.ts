import { prisma } from '../../database/client';
import { User } from "@prisma/client";

async function create(data: CreateUserParams) {
  return prisma.user.create({
    data,
  });
}

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function findByUsername(username: string) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export type CreateUserParams = Pick<User, "username" | "email" | "password">;
  
const userRepository = {
  create,
  findByEmail,
  findById,
  findByUsername
};
  
export default userRepository;

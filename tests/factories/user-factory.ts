import bcrypt from "bcrypt";
import {  faker } from "@faker-js/faker";
import { User } from "@prisma/client";
import { prisma } from "../../src/database/client";

export async function createUser(params: Partial<User> = {}): Promise<User> { 
  const incomingPassword = params.password || faker.internet.password(10);
  const hashedPassword = await bcrypt.hash(incomingPassword, 10);

  return prisma.user.create({
    data: {
      email: params.email || faker.internet.email(),
      username: params.username || faker.internet.userName(),
      password: hashedPassword,
    },
  });
}

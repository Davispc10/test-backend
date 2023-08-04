import { Session } from "@prisma/client";
import { createUser } from "./user-factory";
import { prisma } from "../../src/database/client";

export async function createSession(token: string): Promise<Session> {
  const user = await createUser();

  return prisma.session.create({
    data: {
      token: token,
      userId: user.id,
    },
  });
}

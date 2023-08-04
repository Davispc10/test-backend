import sessionRepository from "@/repositories/session-repository";
import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import { exclude } from "../../utils/prisma-utils";
import { invalidCredentialsError } from "./errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { badRequestError } from "@/errors";

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  if(!email || !password) {
    throw badRequestError();
  }

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email);

  if (!user) throw invalidCredentialsError();

  return user;
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function deleteSession(token: string) {
  const session = await sessionRepository.find(
    token,
  );
  const deleted = await sessionRepository.deleteSession(session.id);

  return deleted;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

export type SignInParams = Pick<User, "email" | "password">;

type SignInResult = {
  user: Pick<User, "id" | "email">;
  token: string; 
};

type GetUserOrFailResult = Pick<User, "id" | "email" | "password">;

const authenticationService = {
  signIn,
  deleteSession
};

export default authenticationService;

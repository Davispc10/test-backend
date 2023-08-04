import bcrypt from "bcrypt";
import userRepository, { CreateUserParams } from "@/repositories/user-repository";
import { duplicatedEmailError, duplicatedUsernameError } from "./errors";

export async function createUser({ email, username, password }: CreateUserParams) {
  await validateUniqueEmailOrFail(email);
  await validateUniqueUsernameOrFail(username);
  
  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    username,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

async function validateUniqueUsernameOrFail(username: string) {
  const userWithSameUsername = await userRepository.findByUsername(username);
  if (userWithSameUsername) {
    throw duplicatedUsernameError();
  }
}

const userService = {
  createUser,
};
  
export default userService;

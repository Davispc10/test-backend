import { ApplicationError } from "@/protocols";

export function duplicatedEmailError(): ApplicationError {
  return {
    name: "DuplicatedEmailError",
    message: "This email is already in use",
  };
}

export function duplicatedUsernameError(): ApplicationError {
  return {
    name: "duplicatedUsernameError",
    message: "This username is already in use",
  };
}

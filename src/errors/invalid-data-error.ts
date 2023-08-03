import { ApplicationError } from "@/protocols";

export function invalidDataError(): ApplicationError {
  return {
    name: "InvalidDataError",
    message: "Invalid data",
  };
}

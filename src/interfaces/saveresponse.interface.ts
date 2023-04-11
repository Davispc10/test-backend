import { Pokemon } from "../entities/Pokemon.entity";
import { ValidationMessage } from "./validationmessage.interface";

export interface SaveResponse {
    pokemonObject?: Pokemon;
    validationErrors?: ValidationMessage[];
  }
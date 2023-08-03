import pokemonService from "@/service/pokemon-service";
import { Response, Request } from "express";
import httpStatus from "http-status";

export async function getPokemons(req: Request, res: Response) {
  try {
    const pokemons = await pokemonService.getPokemons();
    return res.status(httpStatus.OK).send(pokemons);    
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

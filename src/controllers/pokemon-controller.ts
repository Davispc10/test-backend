import pokemonService from "@/service/pokemon-service";
import { Response, Request } from "express";
import httpStatus from "http-status";

export async function getPokemons(req: Request, res: Response) {
  const { page, pageSize } = req.query;
  let { type, direction } = req.query;

  if(direction == undefined) direction = "asc";
  if(type == undefined) type = "undefined";

  try {
    const pokemons = await pokemonService.getPokemons(Number(page), Number(pageSize), direction.toString(), type.toString());
    return res.status(httpStatus.OK).send(pokemons);    
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getPokemonsByPokedex(req: Request, res: Response) {
  const { pokedexNumber } = req.params;

  try {
    const pokemons = await pokemonService.getPokemonsByPokedex(Number(pokedexNumber));
    return res.status(httpStatus.OK).send(pokemons);    
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getPokemonsByKeyword(req: Request, res: Response) {
  const { keyword } = req.params;

  try {
    const pokemons = await pokemonService.getPokemonsByKeyword(keyword);
    return res.status(httpStatus.OK).send(pokemons);    
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getPokemonById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const pokemons = await pokemonService.getPokemonById(Number(id));
    return res.status(httpStatus.OK).send(pokemons);    
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getSortedPokemons(req: Request, res: Response) {
  const { sorter } = req.params;
  const { page, pageSize } = req.query;
  let { type, direction } = req.query;

  if(direction == undefined) direction = "desc";
  if(type == undefined) type = "-";

  try {
    const pokemons = await pokemonService.getSortedPokemons(Number(page), Number(pageSize), sorter, direction.toString(), type.toString());
    return res.status(httpStatus.OK).send(pokemons);    
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

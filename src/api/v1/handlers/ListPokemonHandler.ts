import { Request, Response } from "express";
import ListPokemonService, { PokemonData } from "../service/ListPokemonService";
import { PokemonFilter } from "../domain";
import Pokemon from "../entity/Pokemon";
import AppError from "../errors/AppError";

interface ListResponse {
  count: number;
  next: string;
  previous: string;
  page: number;
  perPage: number;
  pages: number;
  data: Pokemon[];
}

class ListPokemonHandler {
  constructor(private listPokemon: ListPokemonService) {}

  public async handle(req: Request, res: Response) {
    const { page, limit } = req.query;
    const limitNumber = limit ? parseInt(limit as string) : 20;
    const pageNumber = page ? parseInt(page as string) : 1;
    const filters: PokemonFilter = this.getPokemonFilters(req.query);

    const pokemonData = await this.listPokemon.execute(
      filters,
      pageNumber,
      limitNumber
    );

    const response = this.buildResponse(
      pokemonData,
      req,
      pageNumber,
      limitNumber
    );

    if (response.data.length === 0) {
      throw new AppError("No pokemon found with the given parameters", 404);
    }

    res.json(response);
  }

  private getPokemonFilters(query: any): PokemonFilter {
    return {
      generation: query.generation
        ? parseInt(query.generation as string)
        : undefined,
      type: query.type as string,
      weather: query.weather as string,
      legendary: query.legendary
        ? parseInt(query.legendary as string)
        : undefined,
    };
  }

  private buildResponse(
    pokemonData: PokemonData,
    req: Request,
    pageNumber: number,
    limitNumber: number
  ): ListResponse {
    return {
      count: pokemonData.count,
      next: this.getNextUrl(pokemonData, req, pageNumber, limitNumber),
      previous: this.getPreviousUrl(req, pageNumber),
      page: pageNumber,
      perPage: limitNumber,
      pages: Math.ceil(pokemonData.count / limitNumber),
      data: pokemonData.data,
    };
  }

  private getPreviousUrl(req: Request, pageNumber: number) {
    if (pageNumber > 1) {
      return `${req.protocol}://${req.get("host")}${req.originalUrl.replace(
        `page=${pageNumber}`,
        `page=${pageNumber - 1}`
      )}`;
    }

    return "";
  }

  private getNextUrl(
    pokemonData: PokemonData,
    req: Request,
    pageNumber: number,
    limitNumber: number
  ): string {
    if (
      pageNumber === 1 &&
      pokemonData.count > limitNumber &&
      !req.query.page
    ) {
      return `${req.protocol}://${req.get("host")}${req.originalUrl}${
        req.originalUrl.includes("?") ? "&" : "?"
      }page=2`;
    }

    if (pokemonData.count > pageNumber * limitNumber) {
      return `${req.protocol}://${req.get("host")}${req.originalUrl.replace(
        `page=${pageNumber}`,
        `page=${pageNumber + 1}`
      )}`;
    }

    return "";
  }
}

export default ListPokemonHandler;

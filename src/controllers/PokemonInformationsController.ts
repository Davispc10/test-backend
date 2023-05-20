import { Request, Response } from "express";
import { PokemonInformationsFacade } from "../facades/PokemonInformationsFacade";

export class PokemonInformationsController {
  constructor(private readonly pokemonFacade: PokemonInformationsFacade) {
    this.pokemonFacade = pokemonFacade;
  }

  public async getAll(request: Request, response: Response): Promise<Response> {
    const page: number = parseInt(request.query.page as string) || 1;
    const pageSize: number = parseInt(request.query.pageSize as string) || 10;
    const type1: string = request.query.type1 as string;
    const type2: string = request.query.type2 as string;
    const name: string = request.query.name as string;
    const pokedexNumber: string = request.query.pokedexNumber as string;

    return response.status(200).send(await this.pokemonFacade.getAll(page, pageSize, type1, type2, name, pokedexNumber));
  }

  public async getById(request: Request, response: Response): Promise<Response> {
    try {
      return response.status(200).send(await this.pokemonFacade.getById(Number.parseInt(request.params.id)));
    } catch (error) {
      return response.status(500).json({ error: "something wrong" });
    }
  }

  public async save(request: Request, response: Response): Promise<Response> {
    return response.status(201).send(await this.pokemonFacade.save(request.body));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    return response.status(200).send(await this.pokemonFacade.update(Number.parseInt(request.params.id), request.body));
  }

  public async deleteById(request: Request, response: Response): Promise<Response> {
    return response.status(204).send(await this.pokemonFacade.deleteById(Number.parseInt(request.params.id)));
  }
}

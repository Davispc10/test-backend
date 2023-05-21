import { Request, Response } from "express";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { PokemonInformationsController } from "../src/controllers/PokemonInformationsController";
import { MockPokemonInformationsFacade, createPaginatePokemonInformationsResponse, createPokemonInformationsRequest, createPokemonInformationsResponse } from "../src/mocks/MockPokemonInformationsFacade";

describe("pokemon informations controller", () => {
  let pokemonController: PokemonInformationsController;

  beforeEach(() => {
    pokemonController = new PokemonInformationsController(new MockPokemonInformationsFacade());
  });

  it("get all whithout params should return all pokemon informations", async () => {
    const request = {
      query: {
        page: 1,
        pageSize: 10,
      },
    } as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;

    await pokemonController.getAll(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(createPaginatePokemonInformationsResponse());
  });

  it("get by id should return 200", async () => {
    const request = {
      params: {
        id: "1",
      },
    } as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;

    await pokemonController.getById(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(createPokemonInformationsResponse());
  });

  it("get pokemon informations by id should return 500", async () => {
    const request = {} as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
      json: vi.fn(),
    } as unknown as Response;

    await pokemonController.getById(request, response);

    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({ error: "something wrong" });
  });

  it("save pokemon informations should return 201", async () => {
    const request = {
      body: createPokemonInformationsRequest(),
    } as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;

    await pokemonController.save(request, response);

    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.send).toHaveBeenCalledWith(createPokemonInformationsResponse());
  });

  it("save pokemon informations whith invalid body should return 400", async () => {
    const request = {
      body: {},
    } as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;

    await pokemonController.save(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.send).toHaveBeenCalledWith({ error: "Invalid request" });
  });

  it("update pokemon informations should return 200", async () => {
    const request = {
      body: createPokemonInformationsRequest(),
      params: {
        id: 1,
      },
    } as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;

    await pokemonController.update(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalledWith(createPokemonInformationsResponse());
  });

  it("update pokemon informations with wrong request should return 400", async () => {
    const request = {
      body: createPokemonInformationsRequest(),
    } as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;

    await pokemonController.update(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.send).toHaveBeenCalledWith({ error: "Invalid request" });
  });

  it("delete pokemon informations by id should return 204", async () => {
    const request = {
      params: {
        id: 1,
      },
    } as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;

    await pokemonController.deleteById(request, response);

    expect(response.status).toHaveBeenCalledWith(204);
  });

  it("delete pokemon informations by wrong id should return 404", async () => {
    const request = {} as unknown as Request;

    const response = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;

    await pokemonController.deleteById(request, response);

    expect(response.status).toHaveBeenCalledWith(404);
  });
});

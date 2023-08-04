import { Pokemon } from "@prisma/client";
import {  faker } from "@faker-js/faker";
import { prisma } from "../../src/database/client";
import { selector } from "../../src/repositories/pokemon-repository";

export async function createPokemon(params: Partial<Pokemon> = {}): Promise<Partial<Pokemon>> {
  return prisma.pokemon.create({
    data: {
      name: params.name || faker.name.middleName(),
      pokedexNumber: params.pokedexNumber || 999,
      imgName: faker.name.middleName(),
      generation: 1,
      evolutionStage: '1',
      evolved: false,
      familyId: 1,
      crossGen: false,
      type1: params.type1 || "fire",
      type2: params.type2 || "fire",
      weather1: "Sunny",
      weather2: "Rainy",
      statTotal: params.statTotal || 999,
      atk: params.atk || 999,
      def: params.def || 999,
      sta: params.sta || 999,
      legendary: false,
      aquireable: false,
      spawns: false,
      regional: false,
      raidable: false,
      hatchable: 0,
      shiny: false,
      nest: false,
      new: false,
      notGettable: false,
      futureEvolve: false,
      maxCpAt40: 1000,
      maxCpAt39: 1000,
    },
    select: selector
  });
}

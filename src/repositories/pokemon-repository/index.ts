import { prisma } from '../../database/client';

async function findAll(direction: string, type: string, page: number = 0, pageSize: number = 20) {
  return prisma.pokemon.findMany({
    where: {
      OR: [
        {
          type1: type == "undefined" ? { not: "" } : type
        },
        {
          type2: type == "undefined" ? { not: "" } : type
        }
      ]
    },
    orderBy: {
      pokedexNumber: direction == 'asc' ? 'asc' : 'desc'
    },
    skip: page*pageSize,
    take: pageSize,
    select: selector
  });
}

async function findByPokedex(pokedexNumber: number) {
  return prisma.pokemon.findMany({
    where: {
      pokedexNumber
    },
    select: selector
  });
}

async function findById(id: number) {
  return prisma.pokemon.findUnique({
    where: {
      id
    },
    select: selector
  });
}

async function findByKeyword(keyword: string) {
  return prisma.pokemon.findMany({
    where: {
      name: {
        contains: `${keyword}`,
        mode: "insensitive",
      },
    },
    orderBy: {
      pokedexNumber: 'asc'
    },
    select: selector
  });
}

async function findAllSorted(sorter: string, direction: string, type: string, page: number = 0, pageSize: number = 30) {
  return prisma.pokemon.findMany({
    where: {
      OR: [
        {
          type1: type == "-" ? { not: "" } : type
        },
        {
          type2: type == "-" ? { not: "" } : type
        }
      ]
    },
    orderBy: {
      [sorter]: direction == 'desc' ? 'desc' : 'asc'
    },
    skip: page*pageSize,
    take: pageSize,
    select: selector
  });
}

export type parsedPokemon = {
    Row: number;
    Name: string;
    'Pokedex Number': number;
    'Img name': string;
    Generation: number;
    'Evolution Stage': string;
    Evolved: number;
    FamilyID: number;
    'Cross Gen': number;
    'Type 1': string;
    'Type 2': string;
    'Weather 1': string;
    'Weather 2': string;
    'STAT TOTAL': number;
    ATK: number;
    DEF: number;
    STA: number;
    Legendary: number;
    Aquireable: number;
    Spawns: number;
    Regional: number;
    Raidable: number;
    Hatchable: number;
    Shiny: number;
    Nest: number;
    New: number;
    'Not-Gettable': number;
    'Future Evolve': number;
    '100% CP @ 40': number;
    '100% CP @ 39': number;
}

export type parsedPokemonArray = {
    data: parsedPokemon[];
}

const selector = {
  id: true,
  name: true,
  pokedexNumber: true,
  generation: true,
  evolutionStage: true,
  type1: true,
  type2: true,
  weather1: true,
  weather2: true,
  statTotal: true,
  atk: true,
  def: true,
  sta: true,
  legendary: true,
  hatchable: true,
  shiny: true
};

const pokemonRepository = {
  findAll,
  findAllSorted,
  findByPokedex,
  findById,
  findByKeyword
};

export default pokemonRepository;

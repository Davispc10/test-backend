import { prisma } from '../../database/client';

async function findAll(direction: string, page: number = 0, pageSize: number = 30) {
  return prisma.pokemon.findMany({
    orderBy: {
      pokedexNumber: direction == 'asc' ? 'asc' : 'desc'
    },
    skip: page*pageSize,
    take: pageSize
  });
}

async function findByPokedex(pokedexNumber: number) {
  return prisma.pokemon.findMany({
    where: {
      pokedexNumber
    }
  });
}

async function findById(id: number) {
  return prisma.pokemon.findUnique({
    where: {
      id
    }
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
    }
  });
}

async function findAllSorted(sorter: string, direction: string, page: number = 0, pageSize: number = 30) {
  return prisma.pokemon.findMany({
    orderBy: {
      [sorter]: direction == 'desc' ? 'desc' : 'asc'
    },
    skip: page*pageSize,
    take: pageSize
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

const pokemonRepository = {
  findAll,
  findAllSorted,
  findByPokedex,
  findById,
  findByKeyword
};

export default pokemonRepository;

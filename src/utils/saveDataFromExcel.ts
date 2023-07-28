import { createReadStream } from 'fs';
import { prisma } from '../lib/prisma';
import { join } from 'node:path';
import { parse } from 'csv-parse'

interface PokemonDataChunk {
  name: string;
  generation: number;
  type1: string;
  type2: string;
  legendary: number;
  shiny: number;
}

export async function saveDataFromExcel() {
  const dataSaved = await prisma.pokemon.findMany({
    take: 1,
  });

  if (dataSaved.length) {
    return 'saved';
  }
  const path = join(__dirname, '..', '..', 'Pokemon Go.csv');
  console.log(path);

  const steam = createReadStream(path);
  const parser = parse({
    delimiter: ';',
    from_line: 1,
    columns: [
      'row', 
      'name',
      'pokedexNumber',
      'imgName',
      'generation',
      'evolutionStage',
      'evolved',
      'FamilyID',
      'Cross Gen',
      'type1',
      'type2',
      'Weather 1',
      'Weather 2',
      'STAT TOTAL',
      'ATK',
      'DEF',
      'STA',
      'legendary',
      'Aquireable',
      'Spawns',
      'Regional',
      'Raidable',
      'Hatchable',
      'shiny',
      'Nest',
      'New',
      'Not-Gettable',
      'Future Evolve',
      '100% CP @ 40',
      '100% CP @ 39',
    ],
  });

  steam.pipe(parser);

  parser.on('data', async ({
    name,
    generation,
    type1,
    type2,
    legendary,
    shiny,
  }: PokemonDataChunk) => {
    await prisma.pokemon.create({
      data: {
        name,
        generation: Number(generation),
        type_1: type1,
        type_2: type2,
        legendary: Number(legendary),
        shiny: Number(shiny),
      }
    });
  });

  parser.on('end', () => {
    return 'saved';
  });
}
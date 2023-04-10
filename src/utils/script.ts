import path from 'path'
import XLSX from 'xlsx'
import { DataSource } from 'typeorm'

import { Pokemon } from './types'
import { PgPokemon } from '../infra/pokemon.entity'

function readSheet(path: string) {
  const workbook = XLSX.readFile(path)
  return workbook.Sheets[workbook.SheetNames[0]]
}

function worksheetToJson(worksheet: XLSX.WorkSheet) {
  return XLSX.utils.sheet_to_json(worksheet)
}

function mapData(data: any): Pokemon[] {
  return data.map((data: any) => {

    return {
      name: data.Name,
      pokedexNumber: data['Pokedex Number'],
      imgName: data['Img name'] ? data['Img name'].toString() : undefined,
      generation: data.Generation,
      evolutionStage: data['Evolution Stage'] ? data['Evolution Stage'].toString() : undefined,
      evolved: !!data.Evolved,
      familyID: data?.FamilyID ?? undefined,
      crossGen: !!data['Cross Gen'],
      type1: data['Type 1'],
      type2: data['Type 2'] ?? undefined,
      weather1: data['Weather 1'],
      weather2: data['Weather 2'] ?? undefined,
      statTotal: data['STAT TOTAL'],
      atk: data.ATK,
      def: data.DEF,
      sta: data.STA,
      legendary: !!data.Legendary,
      aquireable: data.Aquireable,
      spawns: !!data.Spawns,
      regional: !!data.Regional,
      raidable: data.Raidable,
      hatchable: data.Hatchable,
      shiny: !!data.Shiny,
      nest: !!data.Nest,
      new: !!data.New,
      notGettable: !!data['Not-Gettable'],
      futureEvolve: !!data['Future Evolve'],
      cp40: data['100% CP @ 40'],
      cp39: data['100% CP @ 39']
    } as Pokemon
  });
}

async function savePokemons(pokemons: Pokemon[]): Promise<void> {
  const dataSource = new DataSource({
    type: 'postgres',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'db-dinheirow',
    synchronize: true,
    logging: true,
    entities: [PgPokemon]
  })

  await dataSource.initialize()
  await dataSource.getRepository(PgPokemon).save(pokemons)
}

(async () => {
  try {
    const pathFile = path.resolve(__dirname, '..', '..', 'PokemonGo.xlsx')
    
    const worksheet = readSheet(pathFile)
    const data = worksheetToJson(worksheet)
    const pokemons = mapData(data)

    await savePokemons(pokemons)
  } catch (error) {
    console.log(error)
  }
})()
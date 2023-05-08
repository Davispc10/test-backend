import xlsx from 'xlsx'
import path from 'path'

interface Pokemon {
  row:Number,
  name:String,
  pokedexNumber:Number,
  imgName:String,
  generation:Number,
  evolutionStage:String,
  evolved:Boolean,
  familyId:Number,
  crossGen:Boolean,
  type1:String,
  type2:String,
  weather1:String,
  weather2:String,
  statTotal:Number,
  atk:Number,
  def:Number,
  sta:Number,
  legendary:Number,
  aquireable:Number,
  spawns:Boolean,
  regional:Boolean,
  raidable:Number,
  hatchable:Number,
  shiny:Boolean,
  nest:Boolean,
  new:Boolean,
  notGettable:Boolean,
  futureEvolve: Boolean,
  cp40:Number,
  cp39:Number,
}
const numberToBoolean = (value:number): boolean => value === 1 ? true : false

async function createArrayOfPokemonsFromXLSX(filePath: string): Promise<Pokemon[]> {
  const workbook = xlsx.readFile(filePath)
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]
  const data = xlsx.utils.sheet_to_json(worksheet)
  const pokemons = data.map((row: any) => ({
    row: row.__rowNum__,
    name: row.Name,
    pokedexNumber: row['Pokedex Number'],
    imgName: row['Img name'],
    generation: row.Generation,
    evolutionStage: row['Evolution Stage'],
    evolved: numberToBoolean(row.Evolved),
    familyId: row['FamilyID'],
    crossGen: numberToBoolean(row['Cross Gen']),
    type1: row['Type 1'],
    type2: row['Type 2'],
    weather1: row['Weather 1'],
    weather2: row['Weather 2'],
    statTotal: row['STAT TOTAL'],
    atk: row.ATK,
    def: row.DEF,
    sta: row.STA,
    legendary: row.Legendary,
    aquireable: row.Aquireable,
    spawns: numberToBoolean(row.Spawns),
    regional: numberToBoolean(row.Regional),
    raidable: row.Raidable,
    hatchable: row.Hatchable,
    shiny: numberToBoolean(row.Shiny),
    nest: numberToBoolean(row.Nest),
    new: numberToBoolean(row.New),
    notGettable: numberToBoolean(row['Not-Gettable']),
    futureEvolve: numberToBoolean(row['Future Evolve']),
    cp40: row['100% CP @ 40'],
    cp39: row['100% CP @ 39'],
  }))

  return pokemons
}

export async function returnPokemonsData() {
  const filePath = path.join(__dirname, '../../Pokemon Go.xlsx')
  const pokemons = await createArrayOfPokemonsFromXLSX(filePath)
  return pokemons
}

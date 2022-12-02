import { Pokemon } from './src/modules/pokemons/typeorm/entities/Pokemon';
const xlsx = require('xlsx');

const columns = {
  1: 'A',    2: 'B',    3: 'C',    4: 'D',
  5: 'E',    6: 'F',    7: 'G',    8: 'H',
  9: 'I',    10: 'J',    11: 'K',    12: 'L',
  13: 'M',    14: 'N',    15: 'O',    16: 'P',
  17: 'Q',    18: 'R',    19: 'S',    20: 'T',
  21: 'U',    22: 'V',    23: 'W',    24: 'X',
  25: 'Y',    26: 'Z',    27: 'AA',    28: 'AB',
  29: 'AC',    30: 'AD'}

export class ExcelExtractorTs {
  private pokemons: Pokemon[] = []
  private pokemon: Pokemon | null
  private readonly path
  private workbook
  private worksheet

  constructor(path: string) {
    this.path = path
    this.workbook = xlsx.readFile(this.path)
    this.worksheet = this.workbook.Sheets[this.workbook.SheetNames[0]];
  }

  async create() {
    const data = xlsx.utils.sheet_to_json(this.worksheet, {
      header: "A",
      range: 30
    });



    this.pokemon = new Pokemon()

    data.map(row => {
      for (let cell in row) {
        if (cell === 'B') {
          if (this.pokemon) {
            this.pokemon.name = row['B'];
          }
        }
        if (cell === 'C') {
          if (this.pokemon) {
            this.pokemon.pokedexNumber = row['C'];
          }
        }
        if (cell === 'D') {
          if (this.pokemon) {
            this.pokemon.imgName = row['D'];
          }
        }
        if (cell === 'E') {
          if (this.pokemon) {
            this.pokemon.generation = row['E'];
          }
        }
        if (cell === 'F') {
          if (this.pokemon) {
            this.pokemon.evolutionStage = row['F'];
          }
        }
        if (cell === 'G') {
          if (this.pokemon) {
            this.pokemon.evolved = row['G'];
          }
        }
        if (cell === 'H') {
          if (this.pokemon) {
            this.pokemon.familyId = row['H'];
          }
        }
        if (cell === 'I') {
          if (this.pokemon) {
            this.pokemon.crossGen = row['I'];
          }
        }
        if (cell === 'J') {
          if (this.pokemon) {
            this.pokemon.type1 = row['J'];
          }
        }
        if (cell === 'K') {
          if (this.pokemon) {
            this.pokemon.type2 = row['K\''];
          }
        }
        if (cell === 'L') {
          if (this.pokemon) {
            this.pokemon.weather1 = row['L'];
          }
        }
        if (cell === 'M') {
          if (this.pokemon) {
            this.pokemon.weather2 = row['M'];
          }
        }
        if (cell === 'N') {
          if (this.pokemon) {
            this.pokemon.statTotal = row['N'];
          }
        }
        if (cell === 'O') {
          if (this.pokemon) {
            this.pokemon.atk = row['O'];
          }
        }
        if (cell === 'P') {
          if (this.pokemon) {
            this.pokemon.def = row['P'];
          }
        }
        if (cell === 'Q') {
          if (this.pokemon) {
            this.pokemon.sta = row['Q'];
          }
        }
        if (cell === 'R') {
          if (this.pokemon) {
            this.pokemon.legendary = row['R'];
          }
        }
        if (cell === 'S') {
          if (this.pokemon) {
            this.pokemon.acquirable = row['S'];
          }
        }
        if (cell === 'T') {
          if (this.pokemon) {
            this.pokemon.spawns = row['T'];
          }
        }
        if (cell === 'U') {
          if (this.pokemon) {
            this.pokemon.regional = row['U'];
          }
        }
        if (cell === 'V') {
          if (this.pokemon) {
            this.pokemon.raidable = row['V'];
          }
        }
        if (cell === 'W') {
          if (this.pokemon) {
            this.pokemon.hatchable = row['W'];
          }
        }
        if (cell === 'X') {
          if (this.pokemon) {
            this.pokemon.shiny = row['X'];
          }
        }
        if (cell === 'Y') {
          if (this.pokemon) {
            this.pokemon.nest = row['Y'];
          }
        }
        if (cell === 'Z') {
          if (this.pokemon) {
            this.pokemon.new = row['Z'];
          }
        }
        if (cell === 'AA') {
          if (this.pokemon) {
            this.pokemon.notGettable = row['AA'];
          }
        }
        if (cell === 'AB') {
          if (this.pokemon) {
            this.pokemon.futureEvolve = row['AB'];
          }
        }
        if (cell === 'AC') {
          if (this.pokemon) {
            this.pokemon.cp100e40 = row['AC'];
          }
        }
        if (cell === 'AD') {
          if (this.pokemon) {
            this.pokemon.cp100e39 = row['AD'];
            this.pokemons.push(this.pokemon)
            this.pokemon = new Pokemon()
          }
        }
      }
    });
    return this.pokemons
  }
}

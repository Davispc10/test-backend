export type Pokemon = {
  name: string
  pokedexNumber: number
  imgName: string
  generation: number
  evolutionStage?: string
  evolved: boolean
  familyID?: number
  crossGen: boolean
  type1: string
  type2?: string
  weather1: string
  weather2?: string
  statTotal: number
  atk: number
  def: number
  sta: number
  legendary: boolean
  aquireable: number
  spawns: boolean
  regional: boolean
  raidable: boolean
  hatchable: boolean
  shiny: boolean
  nest: boolean
  new: boolean
  notGettable: boolean
  futureEvolve: boolean
  cp40: number
  cp39: number
}

/*
Name	
Pokedex Number	
Img name	
Generation	
Evolution Stage	
Evolved	
FamilyID	
Cross Gen	
Type 1	
Type 2	
Weather 1	
Weather 2	
STAT TOTAL	
ATK	
DEF	
STA	
Legendary	
Aquireable	
Spawns	
Regional	
Raidable	
Hatchable	
Shiny	
Nest	
New	
Not-Gettable	
Future Evolve	
100% CP @ 40	
100% CP @ 39
*/
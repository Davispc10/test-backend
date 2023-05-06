import { type PokemonEntity } from '@/domain/entities'

import { faker } from '@faker-js/faker'

export const mockedPokemonEntity: PokemonEntity = {
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  imgName: faker.internet.url(),
  generation: faker.datatype.number(),
  evolutionStage: faker.datatype.number(),
  evolved: faker.datatype.boolean(),
  crossGen: faker.datatype.boolean(),
  atk: faker.datatype.number(),
  def: faker.datatype.number(),
  sta: faker.datatype.number(),
  legendary: faker.datatype.boolean(),
  aquireable: faker.datatype.boolean(),
  spaws: faker.datatype.boolean(),
  regional: faker.datatype.boolean(),
  raidable: faker.datatype.boolean(),
  hatchable: faker.datatype.boolean(),
  shiny: faker.datatype.boolean(),
  nest: faker.datatype.boolean(),
  notGettable: faker.datatype.boolean(),
  futureEvolve: faker.datatype.boolean(),
  cp40: faker.datatype.number(),
  cp39: faker.datatype.number(),
  pokedex: { id: faker.datatype.number(), name: faker.name.firstName(), createdAt: new Date(), updatedAt: new Date() },
  type: [],
  weather: [],
  family: [],
  createdAt: new Date(),
  updatedAt: new Date()
}

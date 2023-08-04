import { PrismaClient, Pokemon } from "@prisma/client";
import { parse } from "../src/database/xlsxParsing";
import { parsedPokemon } from "../src/repositories/pokemon-repository";
const prisma = new PrismaClient();

export default async function main(): Promise<void> {
    parse("./PokemonGo.xlsx").forEach(async (element): Promise<void> => {
        element.data.forEach(async (pokemon: parsedPokemon): Promise<Pokemon> => {
            return await prisma.pokemon.create({
                data: {
                    name: pokemon.Name,
                    pokedexNumber: pokemon["Pokedex Number"],
                    imgName: pokemon["Img name"].toString(),
                    generation: pokemon.Generation,
                    evolutionStage: pokemon["Evolution Stage"] ? pokemon["Evolution Stage"].toString() : "",
                    evolved: pokemon.Evolved != 0,
                    familyId: pokemon.FamilyID,
                    crossGen: pokemon["Cross Gen"] != 0,
                    type1: pokemon["Type 1"],
                    type2: pokemon["Type 2"],
                    weather1: pokemon["Weather 1"],
                    weather2: pokemon["Weather 2"],
                    statTotal: pokemon["STAT TOTAL"],
                    atk: pokemon.ATK,
                    def: pokemon.DEF,
                    sta: pokemon.STA,
                    legendary: pokemon.Legendary != 0,
                    aquireable: pokemon.Aquireable != 0,
                    spawns: pokemon.Spawns != 0,
                    regional: pokemon.Regional != 0,
                    raidable: pokemon.Raidable != 0,
                    hatchable: pokemon.Hatchable,
                    shiny: pokemon.Shiny != 0,
                    nest: pokemon.Nest != 0,
                    new: pokemon.New != 0,
                    notGettable: pokemon["Not-Gettable"] != 0,
                    futureEvolve: pokemon["Future Evolve"] != 0,
                    maxCpAt40: pokemon["100% CP @ 40"],
                    maxCpAt39: pokemon["100% CP @ 39"],
                }
            }
            )
        });
    });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

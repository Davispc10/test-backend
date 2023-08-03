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
                    evolved: pokemon.Evolved == 0 ? false : true,
                    familyId: pokemon.FamilyID,
                    crossGen: pokemon["Cross Gen"] == 0 ? false : true,
                    type1: pokemon["Type 1"],
                    type2: pokemon["Type 2"],
                    weather1: pokemon["Weather 1"],
                    weather2: pokemon["Weather 2"],
                    statTotal: pokemon["STAT TOTAL"],
                    atk: pokemon.ATK,
                    def: pokemon.DEF,
                    sta: pokemon.STA,
                    legendary: pokemon.Legendary == 0 ? false : true,
                    aquireable: pokemon.Aquireable == 0 ? false : true,
                    spawns: pokemon.Spawns == 0 ? false : true,
                    regional: pokemon.Regional == 0 ? false : true,
                    raidable: pokemon.Raidable == 0 ? false : true,
                    hatchable: pokemon.Hatchable,
                    shiny: pokemon.Shiny == 0 ? false : true,
                    nest: pokemon.Nest == 0 ? false : true,
                    new: pokemon.New == 0 ? false : true,
                    notGettable: pokemon["Not-Gettable"] == 0 ? false : true,
                    futureEvolve: pokemon["Future Evolve"] == 0 ? false : true,
                    MaxCpAt40: pokemon["100% CP @ 40"],
                    MaxCpAt39: pokemon["100% CP @ 39"],
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

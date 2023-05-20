import Excel from "exceljs";
import { PokemonEntity } from "../../entities/PokemonEntity";
import { PokemonServiceImpl } from "./PokemonServiceImpl";

const pokemonService = new PokemonServiceImpl();

export class UploadFileServiceImpl {
  async save(file: string): Promise<any> {
    const workbook = new Excel.Workbook();
    const content = await workbook.xlsx.readFile(file);

    const worksheet = content.worksheets[0];

    worksheet.eachRow((row, index) => {
      if (index > 0) {
        const pokemonEntity = new PokemonEntity();
        pokemonEntity.name = row.getCell(2)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.pokedexNumber = row.getCell(3)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.imgName = row.getCell(4)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.generation = row.getCell(5)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.evolutionStage = row.getCell(6)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.evolved = row.getCell(7)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.familyId = row.getCell(8)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.crossGen = row.getCell(9)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.type1 = row.getCell(10)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.type2 = row.getCell(11)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.Weather1 = row.getCell(12)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.Weather2 = row.getCell(13)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.statTotal = row.getCell(14)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.atk = row.getCell(15)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.def = row.getCell(16)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.sta = row.getCell(17)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.legendary = row.getCell(18)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.aquireable = row.getCell(19)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.spawns = row.getCell(20)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.regional = row.getCell(21)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.raidable = row.getCell(22)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.hatchable = row.getCell(23)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.shiny = row.getCell(24)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.nest = row.getCell(25)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.new = row.getCell(26)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.notGettable = row.getCell(27)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.futureEvolve = row.getCell(28)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.oneHundredPercent40 = row.getCell(29)?.value!?.toLocaleString().toLowerCase();
        pokemonEntity.oneHundredPercent39 = row.getCell(30)?.value!?.toLocaleString().toLowerCase();

        pokemonService.save(pokemonEntity);
      }
    });
  }
}

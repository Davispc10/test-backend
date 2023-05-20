import Excel from "exceljs";
import { PokemonInformationsEntity } from "../../entities/PokemonInformationsEntity";
import { PokemonInformationsService } from "../PokemonInformationsService";

export class UploadFileServiceImpl {
  constructor(private pokemonInformationsService: PokemonInformationsService) {
    this.pokemonInformationsService = pokemonInformationsService;
  }

  async save(file: string): Promise<any> {
    const workbook = new Excel.Workbook();
    const content = await workbook.xlsx.readFile(file);

    const worksheet = content.worksheets[0];

    worksheet.eachRow((row, index) => {
      if (index > 0) {
        const pokemonInformationsEntity = new PokemonInformationsEntity();
        pokemonInformationsEntity.name = row.getCell(2)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.pokedexNumber = row.getCell(3)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.imgName = row.getCell(4)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.generation = row.getCell(5)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.evolutionStage = row.getCell(6)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.evolved = row.getCell(7)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.familyId = row.getCell(8)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.crossGen = row.getCell(9)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.type1 = row.getCell(10)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.type2 = row.getCell(11)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.Weather1 = row.getCell(12)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.Weather2 = row.getCell(13)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.statTotal = row.getCell(14)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.atk = row.getCell(15)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.def = row.getCell(16)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.sta = row.getCell(17)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.legendary = row.getCell(18)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.aquireable = row.getCell(19)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.spawns = row.getCell(20)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.regional = row.getCell(21)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.raidable = row.getCell(22)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.hatchable = row.getCell(23)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.shiny = row.getCell(24)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.nest = row.getCell(25)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.new = row.getCell(26)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.notGettable = row.getCell(27)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.futureEvolve = row.getCell(28)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.oneHundredPercent40 = row.getCell(29)?.value!?.toLocaleString().toLowerCase();
        pokemonInformationsEntity.oneHundredPercent39 = row.getCell(30)?.value!?.toLocaleString().toLowerCase();

        this.pokemonInformationsService.save(pokemonInformationsEntity);
      }
    });
  }
}

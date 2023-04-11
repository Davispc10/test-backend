import * as XLSX from "xlsx";
import { PokemonDTO } from "../dtos/pokemon.dto";
import { Constants } from "../config/constants";

export class SheetService {

    public async readSheet(): Promise<any[] | { error: { message: string } }> {
        try {
            const workbook = XLSX.readFile(Constants.FILE_PATH);
            const worksheet = workbook.Sheets[Constants.SHEET_NAME];
            const entities: any[] = XLSX.utils.sheet_to_json(worksheet, {
                header: Constants.CUSTOM_HEADER,
                range: 1,
            });
            return entities;
        } catch (error) {
            console.error(error);
            return { error: { message: 'Failed to read sheet' } };
        }
    }

    

}
import XLSX from "xlsx";
import { parsedPokemonArray } from "../repositories/pokemon-repository";

export function parse (filename: string) {
    const data = XLSX.readFile(filename);

    return Object.keys(data.Sheets).map((): parsedPokemonArray => ({
        data: XLSX.utils.sheet_to_json(data.Sheets['Sheet1'])
    }))
}



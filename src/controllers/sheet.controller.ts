import { Request, Response } from "express";
import * as XLSX from "xlsx";
import { Pokemon } from "../entities/pokemon";
import { Constants } from "../config/constants";


export class SheetController {


    public readSheet(req: Request, res: Response): Response {
        try {
            const workbook = XLSX.readFile(Constants.FILE_PATH);
            const worksheet = workbook.Sheets[Constants.SHEET_NAME];
            const pokemonEntities: Pokemon[] = XLSX.utils.sheet_to_json(worksheet, {
              header: Constants.CUSTOM_HEADER,
              range: 1,
            });

            return res.status(200).json(pokemonEntities);
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to read sheet' });
          }
    }


    public home(req: Request, res: Response) {
        return res.status(403).json({ code: 403, message: 'Acesso negado.' });
    }
}
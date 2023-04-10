import { Request, Response, Router } from 'express';
import { Pokemon } from '../interfaces/pokemon';
import { pokemonMapper } from '../helpers/mapper';
import xlsx from 'xlsx';

const router = Router();
const filePath = 'data/Pokemon Go.xlsx';
const file = xlsx.readFile(filePath, { type: 'buffer' });
const sheetName = file.SheetNames[0];
const worksheet = file.Sheets[sheetName];
const data: Pokemon[] = xlsx.utils.sheet_to_json(worksheet);
const mappedData = pokemonMapper(data);

router.get('/pokemons', (req: Request, res: Response) => {
  try {
    res.status(200).send(mappedData);
  } catch (error) {
    console.log(error);
    res.status(500).send(`An ${error} occurred.`);
  }
});

router.get('/pokemon/search', (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    const results = mappedData.filter((p: Pokemon) => {
      return p.name.includes(query);
    });

    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(`An ${error} occurred.`);
  }
});

router.get('/pokemon/page/:pageNumber', (req: Request, res: Response) => {
  try {
    const pageSize = 10;
    const pageNumber = parseInt(req.params.pageNumber, 10);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const results = mappedData.slice(startIndex, endIndex);

    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(`An ${error} occurred.`);
  }
});

router.get('/pokemon/filter/:field/:value', (req: Request, res: Response) => {
  try {
    const field = req.params.field;
    const value = req.params.value;
    const filteredData = mappedData.filter((item: any) => {
      return item[field] === value;
    });

    res.status(200).send(filteredData);
  } catch (error) {
    res.status(500).send(`An ${error} occurred.`);
  }
});

export default router;

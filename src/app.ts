import { pokemonMapper } from './application/pokemon/helpers/mapper';
import { Pokemon } from 'application/pokemon/interfaces/pokemon';
import bodyParser from 'body-parser';
import express, { Application, Request, Response, Router } from 'express';
import xlsx from 'xlsx';

const app: Application = express();
const router = Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

const filePath = 'data/Pokemon Go.xlsx';
const file = xlsx.readFile(filePath, { type: 'buffer' });
const sheetName = file.SheetNames[0];
const worksheet = file.Sheets[sheetName];
const data: Pokemon[] = xlsx.utils.sheet_to_json(worksheet);
const mappedData = pokemonMapper(data);

router.get('/pokemon', (req: Request, res: Response) => {
  res.status(200).send(mappedData);
});

router.get('/pokemon/search', (req: Request, res: Response) => {
  const query = req.query.q as string;
  const results = mappedData.filter((p: Pokemon) => {
    return p.name.includes(query);
  });

  res.status(200).send(results);
});

router.get('/pokemon/page/:pageNumber', (req: Request, res: Response) => {
  const pageSize = 10;
  const pageNumber = parseInt(req.params.pageNumber, 10);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const results = mappedData.slice(startIndex, endIndex);

  res.status(200).send(results);
});

router.get('/pokemon/filter/:field/:value', (req: Request, res: Response) => {
  const field = req.params.field;
  const value = req.params.value;
  const filteredData = mappedData.filter((item: any) => {
    return item[field] === value;
  });

  res.status(200).send(filteredData);
});

export { app };

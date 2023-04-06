import bodyParser from 'body-parser';
import express, { Application } from 'express';
import XLSX from 'xlsx';

const app: Application = express();

app.use(bodyParser.json());

const filePath = 'data/Pokemon Go.xlsx';
const workbook = XLSX.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(worksheet);
console.log(data);

export { app };

import express from 'express';
import 'dotenv/config';
import { routes } from './routes';
import { saveDataFromExcel } from './utils/saveDataFromExcel';

saveDataFromExcel().then((value) => console.log(value));

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('Challenge Online!')
});
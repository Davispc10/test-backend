import router from './application/pokemon/routes/router';
import bodyParser from 'body-parser';
import express, { Application } from 'express';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

export { app };

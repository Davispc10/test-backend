import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import '../../shared/container';
import errorHandler from '../../modules/users/middlewares/error.handler';


const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors())
app.use(errorHandler)

export { app };

import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import '../../containers';
import errorHandler from '../../middlewares/error.handler';
import rateLimiter from '../../middlewares/rateLimiter';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../../../../swagger.json';

const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use(routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(errors());
app.use(errorHandler);

export { app };

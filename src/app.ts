import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import api from './api';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', api);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

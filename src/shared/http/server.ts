import "reflect-metadata";
import 'dotenv/config';
import { app } from '@/shared/http/app';
import { dataSource } from '@/shared/typeorm';

dataSource.initialize().then(() => {
  const server = app.listen(process.env.APP_PORT || 3001, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
  });

})


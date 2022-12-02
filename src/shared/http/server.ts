import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { dataSource } from '../typeorm';
import { ExcelExtractorTs } from '../../../excelExtractor';


dataSource.initialize().then(() => {
  const server = app.listen(process.env.APP_PORT || 3001, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
    const extractor = new ExcelExtractorTs('Pokemon Go.xlsx')
    console.log(extractor.create())
  });
});

import { FileSystem } from '../../../../@shared/file-system/file-system';
import { Injectable } from '@nestjs/common';
import { LoadPokemonsPort } from '../../../application/ports/out/load-pokemons.port';

@Injectable()
export class LoadPokemonsExcelAdapter implements LoadPokemonsPort {
  constructor(private readonly fileReader: FileSystem) {}

  async execute(): Promise<unknown[]> {
    return this.fileReader.readFile('./src/data/pokemons-04202023.xlsx');
  }
}

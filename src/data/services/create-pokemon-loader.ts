import { Pokemon } from '@/domain/entities';
import { CreatePokemonRepository } from '../contracts/create-pokemon-repository';
import { CreatePokemonLoader } from '@/domain/usecases/create-pokemon';
import XLSX from 'xlsx';
import { transformPokemonData } from '../utils/transform-pokemon-utils';
import path from 'path';

export class CreatePokemonLoaderService implements CreatePokemonLoader {
    constructor(
        private readonly pokemonRepository: CreatePokemonRepository,
    ) { }

    async load(): Promise<void> {
        const filePath = path.join(__dirname, '../../../pokemon-go.xlsx');

        const countPokemons = await this.pokemonRepository.countPokemons();
        if (countPokemons >= 822) {
            console.log('Pokémons já populados');
            return;
        }

        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const dataSheet = XLSX.utils.sheet_to_json(sheet);
        const transformedData: Pokemon[] = dataSheet.map(transformPokemonData);

        await this.pokemonRepository.createPokemon(transformedData);
    }
}

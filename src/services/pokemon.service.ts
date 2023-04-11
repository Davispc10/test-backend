import { validate } from "class-validator";
import { PokemonDTO } from "../dtos/pokemon.dto";
import PokemonMapper from "../utils/pokemon.mapper";
import { SaveResponse } from "../interfaces/saveresponse.interface";
import { PokemonRepository } from "../repositories/pokemon.repository";
import { ValidationMessage } from "../interfaces/validationmessage.interface";
import { Pokemon } from "../entities/Pokemon.entity";
import { PokemonFilter } from "../dtos/pokemonfilter.dto";


export class PokemonService {
    private pokemonRepository: PokemonRepository = new PokemonRepository();

    public async insertRows(pokemons: PokemonDTO[]): Promise<SaveResponse[]> {
        var invalidRows: SaveResponse[] = [];
        var savingResult: SaveResponse;
        for (const pokemon of pokemons) {
            savingResult = await this.save(pokemon);
            if ('validationErrors' in savingResult) {
                invalidRows.push(savingResult);
            }
        }

        return invalidRows;

    }

    public async save(pokemon: PokemonDTO): Promise<SaveResponse> {
        const pokemonObject = PokemonMapper.mapDTOtoEntity(pokemon);
        const validationErrors = await validate(pokemonObject, { validationError: { target: false } });
        if (validationErrors.length > 0) {
            const invalidFields: ValidationMessage[] = validationErrors.map(error => ({
                field: error.property,
                message: Object.values(error.constraints).join(', ')
            }));
            return { pokemonObject, validationErrors: invalidFields };
        } else {
            const existentPokemon = await this.pokemonRepository.findByRow(pokemonObject.row);
            if (existentPokemon.length > 0)
                return { pokemonObject, validationErrors: [{ field: 'row', message: 'Pokemon já cadastrado na aplicação.' }] };
        }

        this.pokemonRepository.save(pokemonObject);
        return { pokemonObject };
    }

    public async list(filters: PokemonFilter): Promise<Pokemon[]> {
        const skip = filters.page ? (filters.page - 1) * filters.perPage : 0;
        const take = filters.perPage ? filters.perPage : 10;

        return await this.pokemonRepository.findAll(skip, take, filters);
    }
}
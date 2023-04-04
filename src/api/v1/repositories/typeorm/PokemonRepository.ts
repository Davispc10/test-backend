import { Repository } from "typeorm";
import IPokemonRepository from "../IPokemonRepository";
import Pokemon from "../../entity/Pokemon";
import { AppDataSource } from "../../../../database/data-source";

class PokemonRepository implements IPokemonRepository {
    private ormRepository: Repository<Pokemon>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(Pokemon)
    }

    async index(page: number, limit: number): Promise<Pokemon[] | null> {
        const skip = (page-1) * limit
        const take = limit

        const pokemons = await this.ormRepository.find({skip, take})
        return pokemons
    }

    async findById(id: number): Promise<Pokemon | null> {
        const pokemon = await this.ormRepository.findOneBy({id: id})
        return pokemon
    }

    async findByName(name: string): Promise<Pokemon | null> {
        const pokemon = await this.ormRepository.findOneBy({name: name.charAt(0).toUpperCase()+name.slice(1)})
        return pokemon
    }
    
}

export default PokemonRepository;

import { Repository } from "typeorm";
import IPokemonRepository from "../IPokemonRepository";
import Pokemon from "../../entity/Pokemon";
import { AppDataSource } from "../../../../database/data-source";
import AppError from "../../errors/AppError";

class PokemonRepository implements IPokemonRepository {
  private ormRepository: Repository<Pokemon>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Pokemon);
  }

  async index(page: number, limit: number): Promise<Pokemon[]> {
    const skip = (page - 1) * limit;
    const take = limit;

    const pokemons = await this.ormRepository.find({ skip, take });

    return pokemons;
  }

  async findById(id: number): Promise<Pokemon> {
    const pokemon = await this.ormRepository.findOneBy({ id: id });

    if (!pokemon) {
      throw new AppError(`Could not find pokemon with id ${id}`);
    }

    return pokemon;
  }

  async findByName(name: string): Promise<Pokemon> {
    const pokemon = await this.ormRepository.findOneBy({ name });

    if (!pokemon) {
      throw new AppError(`Could not find pokemon with name ${name}`);
    }

    return pokemon;
  }
}

export default PokemonRepository;

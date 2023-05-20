import { Logger } from "tslog";
import { AppDataSource } from "../../database-config/data-source";
import { PokemonInformationsEntity } from "../../entities/PokemonInformationsEntity";
import { PokemonInformationsService } from "../PokemonInformationsService";

const pokemonRepository = AppDataSource.getRepository(PokemonInformationsEntity);
const log = new Logger();

export class PokemonInformationsServiceImpl implements PokemonInformationsService {
  async getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<[PokemonInformationsEntity[], number]> {
    log.info("getting pokemons");
    return await pokemonRepository.findAndCount({
      where: {
        type1: type1,
        type2: type2,
        name: name,
        pokedexNumber: pokedexNumber,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  async getById(id: number): Promise<PokemonInformationsEntity> {
    log.info(`getting pokemon information by id - ${id}`);
    const result = await pokemonRepository.findOne({ where: { id: id } });

    if (!result) {
      log.error(`pokemon information not found - ${id}`);
      throw new Error("pokemon not found");
    }

    return result;
  }

  async save(pokemonInformationsEntity: PokemonInformationsEntity): Promise<PokemonInformationsEntity> {
    log.info("saving new pokemon information");
    const pokemon = pokemonRepository.create({ ...pokemonInformationsEntity });

    return pokemonRepository.save(pokemon);
  }

  async update(id: number, pokemonInformationsEntity: PokemonInformationsEntity): Promise<PokemonInformationsEntity | null> {
    log.info(`updating pokemon information - id - ${id}`);
    await pokemonRepository.update({ id: id }, pokemonInformationsEntity);
    const result = await pokemonRepository.findOne({ where: { id: id } });

    if (!result) {
      log.error(`pokemon information not found - ${id}`);
      throw new Error("pokemon not found");
    }

    return result;
  }

  async deleteById(id: number): Promise<void> {
    log.info(`deleting pokemon information by id - ${id}`);
    try {
      pokemonRepository.delete({ id: id });
    } catch (error: any) {
      log.error(`someting wrong`);
      throw new Error(error.message);
    }
  }
}

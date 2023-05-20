import { AppDataSource } from "../../database-config/data-source";
import { PokemonEntity } from "../../entities/PokemonEntity";
import { PokemonService } from "../PokemonService";

const pokemonRepository = AppDataSource.getRepository(PokemonEntity);

export class PokemonServiceImpl implements PokemonService {
  async getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<[PokemonEntity[], number]> {
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

  async getById(id: number): Promise<PokemonEntity> {
    const result = await pokemonRepository.findOne({ where: { id: id } });

    if (!result) {
      throw new Error("pokemon not found");
    }

    return result;
  }

  async save(pokemonEntity: PokemonEntity): Promise<PokemonEntity> {
    const pokemon = pokemonRepository.create({ ...pokemonEntity });

    return pokemonRepository.save(pokemon);
  }

  async update(id: number, pokemonEntity: PokemonEntity): Promise<PokemonEntity | null> {
    await pokemonRepository.update({ id: id }, pokemonEntity);
    const result = await pokemonRepository.findOne({ where: { id: id } });

    if (!result) {
      throw new Error("pokemon not found");
    }

    return result;
  }

  async deleteById(id: number): Promise<void> {
    try {
      pokemonRepository.delete({ id: id });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

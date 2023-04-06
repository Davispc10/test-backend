import { PokemonFilter } from "../domain";
import Pokemon from "../entity/Pokemon";

export default interface IPokemonRepository {
  index(
    filters: PokemonFilter,
    page: number,
    limit: number
  ): Promise<Pokemon[]>;
  findById(id: number): Promise<Pokemon>;
  findByName(name: string): Promise<Pokemon>;
}

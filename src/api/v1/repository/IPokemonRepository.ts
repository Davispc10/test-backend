import Pokemon from "../entity/Pokemon";

export default interface IPokemonRepository {
  index(page: number, limit: number): Promise<Pokemon[]>;
  findById(id: number): Promise<Pokemon>;
  findByName(name: string): Promise<Pokemon>;
}

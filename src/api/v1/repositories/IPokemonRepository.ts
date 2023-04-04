import Pokemon from "../entity/Pokemon";

export default interface IPokemonRepository {
    index(page: number, limit: number): Promise<Pokemon[] | null>
    findById(id: number): Promise<Pokemon | null>;
    findByName(name: string): Promise<Pokemon | null>;
}
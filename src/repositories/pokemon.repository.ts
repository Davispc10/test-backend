import { Pokemon } from "../entities/Pokemon.entity";
import { AppDataSource } from "../database/data-source";
import { DataSource } from "typeorm";


export class PokemonRepository {
    async save(pokemon: Pokemon): Promise<Pokemon> {
        return await AppDataSource.manager.save(Pokemon, pokemon);
    }

    async findByRow(row: number): Promise<Pokemon[]> {
        return await AppDataSource.manager.findBy(Pokemon, {
            row
        });
    }

    async findAll(skip: number, take: number, filters): Promise<Pokemon[]> {
        const query = AppDataSource.getRepository(Pokemon)
            .createQueryBuilder('pokemons')
            .where('pokemons.row > 0');


        if ('name' in filters)
            query.andWhere('pokemons.name LIKE :name', { name: `%${filters.name}%` });
        if ('generation' in filters)
            query.andWhere('pokemons.generation = :generation', { generation: filters.generation });
        if ('type1' in filters)
            query.andWhere('pokemons.type1 LIKE :type1', { type1: `%${filters.type1}%` });
        if ('weather1' in filters)
            query.andWhere('pokemons.weather1 LIKE :weather1', { weather1: `%${filters.weather1}%` });
        if ('stat_total' in filters)
            query.andWhere('pokemons.stat_total = :stat_total', { stat_total: filters.stat_total });
        if ('legendary' in filters)
            query.andWhere('pokemons.legendary = :legendary', { legendary: filters.legendary });
        if ('is_shiny' in filters)
            query.andWhere('pokemons.is_shiny = :is_shiny', { is_shiny: filters.is_shiny });


        return await query.orderBy('pokemons.row', 'ASC')
            .skip(skip)
            .take(take)
            .getMany();;
    }
}
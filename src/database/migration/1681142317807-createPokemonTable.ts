import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePokemonTable1681142317807 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'pokemons',
                    columns: [
                        { name: 'id', type: 'int', isGenerated: true, generationStrategy: 'increment', isPrimary: true },
                        { name: 'row', type: 'int', isNullable: false },
                        { name: 'name', type: 'varchar', length: '100', isNullable: false },
                        { name: 'pokedex_number', type: 'int', isNullable: false },
                        { name: 'img_name', type: 'varchar', isNullable: false },
                        { name: 'generation', type: 'int', isNullable: false },
                        { name: 'evolution_stage', type: 'int', isNullable: true },
                        { name: 'is_evolved', type: 'boolean', isNullable: false },
                        { name: 'family_id', type: 'int', isNullable: true },
                        { name: 'is_cross_gen', type: 'boolean', isNullable: false },
                        { name: 'type1', type: 'varchar', length: '50', isNullable: false },
                        { name: 'type2', type: 'varchar', length: '50', isNullable: true },
                        { name: 'weather1', type: 'varchar', length: '50', isNullable: false },
                        { name: 'weather2', type: 'varchar', length: '50', isNullable: true },
                        { name: 'stat_total', type: 'int', isNullable: false },
                        { name: 'atk', type: 'int', isNullable: false },
                        { name: 'def', type: 'int', isNullable: false },
                        { name: 'sta', type: 'int', isNullable: false },
                        { name: 'legendary', type: 'int', isNullable: false },
                        { name: 'aquireable', type: 'int', isNullable: false },
                        { name: 'spawns', type: 'boolean', isNullable: false },
                        { name: 'is_regional', type: 'boolean', isNullable: false },
                        { name: 'raidable', type: 'int', isNullable: false },
                        { name: 'hatchable', type: 'int', isNullable: false },
                        { name: 'is_shiny', type: 'boolean', isNullable: false },
                        { name: 'is_nest', type: 'boolean', isNullable: false },
                        { name: 'is_new', type: 'boolean', isNullable: false },
                        { name: 'is_not_gettable', type: 'boolean', isNullable: false },
                        { name: 'is_future_evolve', type: 'boolean', isNullable: false },
                        { name: 'cp_40', type: 'int', isNullable: false },
                        { name: 'cp_39', type: 'int', isNullable: false }
                    ]
                }
            ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pokemons');
    }

}

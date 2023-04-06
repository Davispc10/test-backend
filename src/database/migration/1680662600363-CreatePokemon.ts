import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePokemon1680662600363 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemon',
        columns: [
          { name: 'id', type: 'integer' },
          { name: 'name', type: 'varchar' },
          { name: 'pokedex_number', type: 'integer' },
          { name: 'img_name', type: 'varchar' },
          { name: 'generation', type: 'integer' },
          { name: 'evolution_stage', type: 'varchar', isNullable: true },
          { name: 'evolved', type: 'varchar' },
          { name: 'familyId', type: 'integer', isNullable: true },
          { name: 'cross_Gen', type: 'boolean' },
          { name: 'type_one', type: 'varchar' },
          { name: 'type_two', type: 'varchar', isNullable: true },
          { name: 'weather_one', type: 'varchar' },
          { name: 'weather_two', type: 'varchar', isNullable: true },
          { name: 'stat_total', type: 'integer' },
          { name: 'atk', type: 'integer' },
          { name: 'def', type: 'integer' },
          { name: 'sta', type: 'integer' },
          { name: 'legendary', type: 'integer' },
          { name: 'aquireable', type: 'integer' },
          { name: 'spawns', type: 'boolean' },
          { name: 'regional', type: 'integer' },
          { name: 'raidable', type: 'integer' },
          { name: 'hatchable', type: 'integer' },
          { name: 'shiny', type: 'boolean' },
          { name: 'nest', type: 'boolean' },
          { name: 'new', type: 'boolean' },
          { name: 'not_gettable', type: 'boolean' },
          { name: 'future_evolve', type: 'boolean' },
          { name: 'cp40', type: 'integer' },
          { name: 'cp39', type: 'integer' },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemon');
  }
}

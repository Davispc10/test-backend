import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1706317874330 implements MigrationInterface {
    name = 'FirstMigration1706317874330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "row" integer, "name" character varying NOT NULL, "pokedex_number" integer NOT NULL, "img_name" character varying, "generation" integer NOT NULL, "evolution_stage" character varying, "evolved" boolean, "family_id" integer, "cross_gen" integer NOT NULL, "type1" character varying NOT NULL, "weather1" character varying NOT NULL, "stat_total" integer NOT NULL, "atk" integer NOT NULL, "def" integer NOT NULL, "sta" integer NOT NULL, "legendary" integer NOT NULL, "aquireable" integer NOT NULL, "spawns" integer NOT NULL, "regional" boolean NOT NULL, "raidable" integer NOT NULL, "hatchable" integer NOT NULL, "shiny" boolean NOT NULL, "nest" boolean NOT NULL, "is_new" boolean NOT NULL, "not_gettable" boolean NOT NULL, "future_evolve" boolean NOT NULL, "cp100_at_40" integer NOT NULL, "cp100_at_39" integer NOT NULL, CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pokemons"`);
    }

}

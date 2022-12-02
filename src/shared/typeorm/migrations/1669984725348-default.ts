import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1669984725348 implements MigrationInterface {
  name = 'default1669984725348';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Pokemon" ("name" character varying NOT NULL, "pokedexNumber" integer NOT NULL, "imgName" character varying, "generation" integer NOT NULL, "evolutionStage" character varying, "evolved" integer NOT NULL, "familyId" integer, "crossGen" integer NOT NULL, "type1" character varying NOT NULL, "type2" character varying, "weather1" character varying NOT NULL, "weather2" character varying, "statTotal" integer NOT NULL, "atk" integer NOT NULL, "def" integer NOT NULL, "sta" integer NOT NULL, "legendary" integer NOT NULL, "acquirable" integer NOT NULL, "spawns" integer NOT NULL, "regional" integer NOT NULL, "raidable" integer NOT NULL, "hatchable" integer NOT NULL, "shiny" integer NOT NULL, "nest" integer NOT NULL, "new" integer NOT NULL, "notGettable" integer NOT NULL, "futureEvolve" integer NOT NULL, "cp100e40" integer NOT NULL, "cp100e39" integer NOT NULL, CONSTRAINT "PK_954c26c39990adb04a88d5b9197" PRIMARY KEY ("pokedexNumber"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "User" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "User"`);
    await queryRunner.query(`DROP TABLE "Pokemon"`);
  }
}

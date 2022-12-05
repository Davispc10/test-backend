import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1670207243105 implements MigrationInterface {
  name = 'default1670207243105';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "AdditionalInformation" ("pokedexNumber" integer NOT NULL, "legendary" integer NOT NULL, "acquirable" integer NOT NULL, "spawns" integer NOT NULL, "regional" integer NOT NULL, "raidable" integer NOT NULL, "hatchable" integer NOT NULL, "shiny" integer NOT NULL, "nest" integer NOT NULL, "new" integer NOT NULL, "notGettable" integer NOT NULL, "futureEvolve" integer NOT NULL, CONSTRAINT "PK_7e9d1f16c189ad0edb04d08fd74" PRIMARY KEY ("pokedexNumber"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "FightingAttributes" ("pokedexNumber" integer NOT NULL, "statTotal" integer NOT NULL, "atk" integer NOT NULL, "def" integer NOT NULL, "sta" integer NOT NULL, "cp100e40" integer NOT NULL, "cp100e39" integer NOT NULL, CONSTRAINT "PK_609c6854bed5944134c15db9d9c" PRIMARY KEY ("pokedexNumber"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Information" ("pokedexNumber" integer NOT NULL, "name" character varying NOT NULL, "imgName" character varying, "generation" integer NOT NULL, "evolutionStage" character varying, "evolved" integer NOT NULL, "familyId" integer, "crossGen" integer NOT NULL, CONSTRAINT "PK_4f24ae5808cadba5e4a54725a4d" PRIMARY KEY ("pokedexNumber"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "TypeWeather" ("pokedexNumber" integer NOT NULL, "type1" character varying NOT NULL, "type2" character varying, "weather1" character varying NOT NULL, "weather2" character varying, CONSTRAINT "PK_c2531e19dfa9bda876e1115110f" PRIMARY KEY ("pokedexNumber"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Pokemon" ("id" SERIAL NOT NULL, "informationPokedexNumber" integer, "typeWeatherPokedexNumber" integer, "fightingAttributesPokedexNumber" integer, "additionalInformationPokedexNumber" integer, CONSTRAINT "REL_699ad6168c197d89a901e3e6d0" UNIQUE ("informationPokedexNumber"), CONSTRAINT "REL_2658e0989bf08ba9a6a0ea3066" UNIQUE ("typeWeatherPokedexNumber"), CONSTRAINT "REL_95291e9c778ff92c251a881e2d" UNIQUE ("fightingAttributesPokedexNumber"), CONSTRAINT "REL_6e2afe985c723ca7deefd2f11e" UNIQUE ("additionalInformationPokedexNumber"), CONSTRAINT "PK_046199a45538d7b349aa1863783" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "User" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "saltedHash" character varying NOT NULL, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pokemon" ADD CONSTRAINT "FK_699ad6168c197d89a901e3e6d05" FOREIGN KEY ("informationPokedexNumber") REFERENCES "Information"("pokedexNumber") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pokemon" ADD CONSTRAINT "FK_2658e0989bf08ba9a6a0ea30660" FOREIGN KEY ("typeWeatherPokedexNumber") REFERENCES "TypeWeather"("pokedexNumber") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pokemon" ADD CONSTRAINT "FK_95291e9c778ff92c251a881e2da" FOREIGN KEY ("fightingAttributesPokedexNumber") REFERENCES "FightingAttributes"("pokedexNumber") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pokemon" ADD CONSTRAINT "FK_6e2afe985c723ca7deefd2f11e4" FOREIGN KEY ("additionalInformationPokedexNumber") REFERENCES "AdditionalInformation"("pokedexNumber") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Pokemon" DROP CONSTRAINT "FK_6e2afe985c723ca7deefd2f11e4"`);
    await queryRunner.query(`ALTER TABLE "Pokemon" DROP CONSTRAINT "FK_95291e9c778ff92c251a881e2da"`);
    await queryRunner.query(`ALTER TABLE "Pokemon" DROP CONSTRAINT "FK_2658e0989bf08ba9a6a0ea30660"`);
    await queryRunner.query(`ALTER TABLE "Pokemon" DROP CONSTRAINT "FK_699ad6168c197d89a901e3e6d05"`);
    await queryRunner.query(`DROP TABLE "User"`);
    await queryRunner.query(`DROP TABLE "Pokemon"`);
    await queryRunner.query(`DROP TABLE "TypeWeather"`);
    await queryRunner.query(`DROP TABLE "Information"`);
    await queryRunner.query(`DROP TABLE "FightingAttributes"`);
    await queryRunner.query(`DROP TABLE "AdditionalInformation"`);
  }
}

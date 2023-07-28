/*
  Warnings:

  - A unique constraint covering the columns `[pokedex_number]` on the table `pokemons` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE pokemons_pokedex_number_seq;
ALTER TABLE "pokemons" ALTER COLUMN "pokedex_number" SET DEFAULT nextval('pokemons_pokedex_number_seq');
ALTER SEQUENCE pokemons_pokedex_number_seq OWNED BY "pokemons"."pokedex_number";

-- CreateIndex
CREATE UNIQUE INDEX "pokemons_pokedex_number_key" ON "pokemons"("pokedex_number");

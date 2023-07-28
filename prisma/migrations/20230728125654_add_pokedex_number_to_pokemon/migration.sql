/*
  Warnings:

  - Added the required column `pokedex_number` to the `pokemons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pokemons" ADD COLUMN     "pokedex_number" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "pokemons_pokedex_number_idx" ON "pokemons"("pokedex_number");

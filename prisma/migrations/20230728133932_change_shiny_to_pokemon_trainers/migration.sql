/*
  Warnings:

  - You are about to drop the column `shiny` on the `pokemons` table. All the data in the column will be lost.
  - Added the required column `is_shiny` to the `pokemons_trainers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pokemons" DROP COLUMN "shiny";

-- AlterTable
ALTER TABLE "pokemons_trainers" ADD COLUMN     "is_shiny" INTEGER NOT NULL;

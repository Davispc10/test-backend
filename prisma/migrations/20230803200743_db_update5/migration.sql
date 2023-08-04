/*
  Warnings:

  - You are about to drop the column `MaxCpAt39` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `MaxCpAt40` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `maxCpAt39` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxCpAt40` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "MaxCpAt39",
DROP COLUMN "MaxCpAt40",
ADD COLUMN     "maxCpAt39" INTEGER NOT NULL,
ADD COLUMN     "maxCpAt40" INTEGER NOT NULL;

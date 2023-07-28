-- CreateTable
CREATE TABLE "trainers" (
    "id" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "trainers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "generation" INTEGER NOT NULL,
    "type_1" TEXT NOT NULL,
    "type_2" TEXT NOT NULL DEFAULT '',
    "legendary" INTEGER NOT NULL,
    "shiny" INTEGER NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemons_trainers" (
    "id" TEXT NOT NULL,
    "trainer_id" TEXT NOT NULL,
    "pokemon_id" TEXT NOT NULL,

    CONSTRAINT "pokemons_trainers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trainers_nickname_key" ON "trainers"("nickname");

-- AddForeignKey
ALTER TABLE "pokemons_trainers" ADD CONSTRAINT "pokemons_trainers_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemons_trainers" ADD CONSTRAINT "pokemons_trainers_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

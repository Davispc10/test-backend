import { Injectable } from '@nestjs/common';
import { PokemonService } from 'src/modules/pokemon/pokemon.service';
import * as pokedex from 'src/data/pokedexbase.json';
import * as bluebird from 'bluebird';

@Injectable()
export class _2022310979320001_addFullPokedexToDatabase {
  constructor(private pokemonService: PokemonService) {}
  async up() {
    const list = await this.pokemonService.findAll();
    if (list.length === pokedex.length)
      return 'O Banco de dados já foi preenchido!';

    try {
      const toCreate = [];

      await bluebird.mapSeries(pokedex, async (pokemon) => {
        const exists = list.find(
          (createdPokemon) => createdPokemon.name === pokemon.name,
        );

        if (!exists || exists === undefined) {
          const {
            name,
            number,
            image,
            generation,
            evolutionStage,
            evolved,
            familyId,
            crossGen,
            primaryType,
            secondaryType,
            primaryWeather,
            secondaryWeather,
            statTotal,
            atk,
            def,
            sta,
            legendary,
            aquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            isNew,
            nonGettable,
            futureEvolve,
            fullCp40,
            fullCp39,
          } = pokemon;

          toCreate.push({
            name,
            number: Number(number),
            image,
            generation: Number(generation),
            evolutionStage,
            evolved: evolved === '1' ? true : false,
            familyId: Number(familyId),
            crossGen: crossGen === '1' ? true : false,
            primaryType,
            secondaryType,
            primaryWeather,
            secondaryWeather,
            statTotal: Number(statTotal),
            atk: Number(atk),
            def: Number(def),
            sta: Number(sta),
            legendary: legendary === '1' ? true : false,
            aquireable: aquireable === '1' ? true : false,
            spawns: spawns === '1' ? true : false,
            regional: regional === '1' ? true : false,
            raidable: raidable === '1' ? true : false,
            hatchable: hatchable === '1' ? true : false,
            shiny: shiny === '1' ? true : false,
            nest: nest === '1' ? true : false,
            isNew: isNew === '1' ? true : false,
            nonGettable: nonGettable === '1' ? true : false,
            futureEvolve: futureEvolve === '1' ? true : false,
            fullCp40: Number(fullCp40),
            fullCp39: Number(fullCp39),
          });
        }
      });

      if (toCreate.length > 1) {
        return this.pokemonService.create(toCreate);
      }
    } catch (error) {
      return error.message;
    }
  }
}

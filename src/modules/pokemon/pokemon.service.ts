import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, MoreThanOrEqual, ILike } from 'typeorm';
import { FindAllPokemonDto } from './dto/find-all-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import * as bluebird from 'bluebird';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(params: any) {
    try {
      const query = [
        `INSERT INTO public.pokemon ("name", image, generation, evolution_stage, has_evolved, family_id, cross_gen, primary_type, secondary_type, primary_weather, secondary_weather, stat_total, atk, def, sta, is_legendary, is_aquireable, spawns, is_regional, is_raidable, is_hatchable, has_shiny, has_nest, is_new, is_non_gettable, future_evolve, full_cp_40, full_cp_39, "number") VALUES `,
      ];

      const inserts = [];

      bluebird
        .mapSeries(params, (pokemon) => {
          const queryBuilder = `('${pokemon.name}', '${pokemon.image}', '${pokemon.generation}', '${pokemon.evolutionStage}', ${pokemon.evolved}, ${pokemon.familyId}, ${pokemon.crossGen},'${pokemon.primaryType}', '${pokemon.secondaryType}', '${pokemon.primaryWeather}', '${pokemon.secondaryWeather}', ${pokemon.statTotal}, ${pokemon.atk}, ${pokemon.def}, ${pokemon.sta}, ${pokemon.legendary}, ${pokemon.aquireable}, ${pokemon.spawns}, ${pokemon.regional}, ${pokemon.raidable}, ${pokemon.hatchable}, ${pokemon.shiny}, ${pokemon.nest}, ${pokemon.isNew}, ${pokemon.nonGettable}, ${pokemon.futureEvolve}, ${pokemon.fullCp40}, ${pokemon.fullCp39}, ${pokemon.number}), `;

          inserts.push(queryBuilder);
        })
        .then(() => {
          const concatedQuery = query.concat(inserts).join('');

          const removeLastComma = concatedQuery.substring(
            0,
            concatedQuery.length - 2,
          );

          return this.dataSource.query(removeLastComma);
        });
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const query = this.pokemonRepository.find();

      return query;
    } catch (error) {
      return error.message;
    }
  }

  async find(findPokemonDto: Partial<FindAllPokemonDto>) {
    try {
      const query = { where: {}, skip: 0 };

      const {
        name,
        number,
        generation,
        fullCp39,
        fullCp40,
        evolutionStage,
        evolved,
        primaryType,
        secondaryType,
        primaryWeather,
        secondaryWeather,
        statTotal,
        legendary,
        atk,
        def,
        sta,
        raidable,
        shiny,
        isNew,
        nest,
        hatchable,
        futureEvolve,
        crossGen,
        page,
        limit = 10,
      } = findPokemonDto;

      if (limit) query['take'] = limit;
      if (page) query.skip = 10 * page;

      if (name) query.where['name'] = ILike(name);
      if (generation) query.where['generation'] = generation;
      if (number) query.where['number'] = number;
      if (evolved) query.where['evolved'] = evolved;
      if (primaryType) query.where['primaryType'] = primaryType;
      if (secondaryType) query.where['secondaryType'] = secondaryType;
      if (primaryWeather) query.where['primaryWeather'] = primaryWeather;
      if (secondaryWeather) query.where['secondaryWeather'] = secondaryWeather;
      if (evolutionStage) query.where['evolutionStage'] = evolutionStage;
      if (legendary) query.where['legendary'] = legendary;
      if (fullCp39) query.where['fullCp39'] = MoreThanOrEqual(Number(fullCp39));
      if (fullCp40) query.where['fullCp40'] = MoreThanOrEqual(Number(fullCp40));
      if (atk) query.where['atk'] = MoreThanOrEqual(Number(atk));
      if (def) query.where['def'] = MoreThanOrEqual(Number(def));
      if (sta) query.where['sta'] = MoreThanOrEqual(Number(sta));
      if (statTotal)
        query.where['statTotal'] = MoreThanOrEqual(Number(statTotal));
      if (raidable) query.where['raidable'] = raidable;
      if (shiny) query.where['shiny'] = shiny;
      if (isNew) query.where['isNew'] = isNew;
      if (nest) query.where['nest'] = nest;
      if (hatchable) query.where['hatchable'] = hatchable;
      if (futureEvolve) query.where['futureEvolve'] = futureEvolve;
      if (crossGen) query.where['crossGen'] = crossGen;

      const [pokemon] = await this.pokemonRepository.findAndCount(query);

      return pokemon;
    } catch (error) {
      return error.message;
    }
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { ListPokemonsPort as ListPokemonsPort } from '../../../application/ports/out/list-pokemons.port';
import { PokemonEntity } from './entity/pokemon.entity';
import { Repository } from 'typeorm';
import FamilyId from '../../../domain/entity/family-id';
import Pokemon from '../../../domain/entity/pokemon';
import PokemonId from '../../../domain/entity/pokemon-id';
import PokedexId from '../../../domain/entity/pokedex-id';
import PokemonType from '../../../domain/entity/pokemon-type';
import PokemonWeather from '../../../domain/entity/pokemon-weather';
import PokemonStat from '../../../domain/entity/pokemon-stat';
import { PaginationQueryDto } from '../../../../@shared/dto/validation-query.dto';

export class ListPokemonsPersistenceAdapter implements ListPokemonsPort {
  constructor(
    @InjectRepository(PokemonEntity)
    private readonly pokemonRepository: Repository<PokemonEntity>,
  ) {}

  async execute(paginationQuery: PaginationQueryDto): Promise<Pokemon[]> {
    const { limit, offset } = paginationQuery;
    const pokemons = await this.pokemonRepository.find({
      skip: offset,
      take: limit,
    });
    return pokemons.map(
      (pokemon) =>
        new Pokemon(
          new PokemonId(pokemon.id),
          pokemon.name,
          new PokedexId(pokemon.pokedexId),
          pokemon.generation,
          pokemon.evolutionStage,
          pokemon.evolved,
          new FamilyId(pokemon.familyId),
          new PokemonType(pokemon.type1),
          new PokemonType(pokemon.type2),
          new PokemonWeather(pokemon.weather1),
          new PokemonWeather(pokemon.weather2),
          new PokemonStat(pokemon.statTotal),
          new PokemonStat(pokemon.atk),
          new PokemonStat(pokemon.def),
          new PokemonStat(pokemon.sta),
        ),
    );
  }
}

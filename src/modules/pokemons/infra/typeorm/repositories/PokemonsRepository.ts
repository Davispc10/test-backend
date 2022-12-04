import { Repository } from 'typeorm';
import { dataSource } from '../../../../../shared/infra/typeorm';
import { Pokemon } from '../entities/Pokemon';
import { IPokemonsRepository, SearchParams } from '../../../domain/repositories/IPokemonsRepository';
import { IFilters } from '../../../useCases/FindPokemons.use-case';
import IPokemonPaginate from '../../../domain/models/IPokemonPaginate';
import { AdditionalInformation } from '../entities/AdditionalInformation';
import { FightingAttributes } from '../entities/FightingAttributes';
import { Information } from '../entities/Information';
import { TypeWeather } from '../entities/TypeWeather';

export class PokemonsRepository implements IPokemonsRepository {
  private pokemonRepository: Repository<Pokemon>;
  private additionalInformationRepository: Repository<AdditionalInformation>;
  private fightingAttributesRepository: Repository<FightingAttributes>;
  private informationRepository: Repository<Information>;
  private typeWeatherRepository: Repository<TypeWeather>;

  constructor() {
    this.pokemonRepository = dataSource.getRepository(Pokemon);
    this.informationRepository = dataSource.getRepository(Information);
    this.typeWeatherRepository = dataSource.getRepository(TypeWeather);
    this.fightingAttributesRepository = dataSource.getRepository(FightingAttributes);
    this.additionalInformationRepository = dataSource.getRepository(AdditionalInformation);
  }

  async create(pokemon: Pokemon): Promise<Pokemon | undefined> {
    const hasPokemon = await this.findByPokedexNumber(pokemon.information.pokedexNumber);

    if (hasPokemon) {
      return;
    }
    try {
      await this.informationRepository.save(pokemon.information)
      await this.typeWeatherRepository.save(pokemon.type_weather)
      await this.fightingAttributesRepository.save(pokemon.fighting_attributes)
      await this.additionalInformationRepository.save(pokemon.additional_information)
      return await this.pokemonRepository.save(pokemon);
    } catch (e) {}
  }

  async findPokemons(
    { page, skip, take }: SearchParams,
    data: IFilters | null,
  ): Promise<Pokemon[] | IPokemonPaginate | null> {
    const { name, pokedexNumber, generation, legendary, type1, weather1 } = {
      ...data,
    };

    const [pokemons, amount] = await this.pokemonRepository.findAndCount({
      relations: {
        information: true,
        type_weather: true,
        fighting_attributes: true,
        additional_information: true
      },
      where: {
        information: {
          name: name,
          pokemonNumber: pokedexNumber,
          generation: generation
        },
        type_weather: {
          type1: type1,
          weather1: weather1
        },
        additional_information: {
          legendary: legendary
        }
      },
      skip: skip,
      take: take
    })

    const result: IPokemonPaginate = {
      total: amount,
      current_page: page,
      per_page: take,
      data: pokemons,
    };

    return result;
  }

  async findByPokedexNumber(
    pokedexNumber: number,
  ): Promise<Pokemon | undefined | null> {
    return await this.pokemonRepository.findOne({
      relations: {
        information: true
      },
      where: {
        information: {
          pokedexNumber: pokedexNumber
        },
      },
    });
  }
}

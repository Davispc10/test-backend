import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEntity } from './entity/pokemon.entity';
import { Repository } from 'typeorm';
import { SavePokemonsPort as SavePokemonsPort } from '../../../application/ports/out/save-pokemons.port';
import { Injectable } from '@nestjs/common';
import Pokemon from '../../../domain/entity/pokemon';

@Injectable()
export class SavePokemonsPersistenceAdapter implements SavePokemonsPort {
  constructor(
    @InjectRepository(PokemonEntity)
    private readonly pokemonRepository: Repository<PokemonEntity>,
  ) {}

  async execute(pokemons: Pokemon[]): Promise<void> {
    const pokemonsEntity: PokemonEntity[] = pokemons.map(
      (pokemon) =>
        ({
          id: pokemon.id,
          name: pokemon.name,
          pokedexId: pokemon.pokedexId,
          generation: pokemon.generation,
          evolutionStage: pokemon.evolutionStage,
          evolved: pokemon.evolved,
          familyId: pokemon.familyId,
          type1: pokemon.type1,
          type2: pokemon.type2,
          weather1: pokemon.weather1,
          weather2: pokemon.weather2,
          statTotal: pokemon.statTotal,
          atk: pokemon.atk,
          def: pokemon.def,
          sta: pokemon.sta,
        } as PokemonEntity),
    );
    try {
      await this.pokemonRepository.save(pokemonsEntity);
    } catch (error) {
      throw new Error(error);
    }
  }
}

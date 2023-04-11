import { PokemonDTO } from "../dtos/pokemon.dto";
import { Pokemon } from "../entities/Pokemon.entity";

export default class PokemonMapper {
    static mapDTOtoEntity(dto: PokemonDTO): Pokemon {

        var pokemonEntity = new Pokemon();
        pokemonEntity.row = dto.row;
        pokemonEntity.name = String(dto.name);
        pokemonEntity.pokedexNumber = dto.pokedexNumber;
        pokemonEntity.imgName = String(dto.imgName);
        pokemonEntity.generation = dto.generation;
        pokemonEntity.evolutionStage = dto.evolutionStage;
        pokemonEntity.isEvolved = Boolean(dto.isEvolved);
        pokemonEntity.familyID = dto.familyID;
        pokemonEntity.isCrossGen = Boolean(dto.isCrossGen);
        pokemonEntity.type1 = String(dto.type1);
        pokemonEntity.type2 = String(dto.type2);
        pokemonEntity.weather1 = String(dto.weather1);
        pokemonEntity.weather2 = String(dto.weather2);
        pokemonEntity.statTotal = dto.statTotal;
        pokemonEntity.atk = dto.atk;
        pokemonEntity.def = dto.def;
        pokemonEntity.sta = dto.sta;
        pokemonEntity.legendary = dto.legendary;
        pokemonEntity.aquireable = dto.aquireable;
        pokemonEntity.spawns = Boolean(dto.spawns);
        pokemonEntity.isRegional = Boolean(dto.isRegional);
        pokemonEntity.raidable = dto.raidable;
        pokemonEntity.hatchable = dto.hatchable;
        pokemonEntity.isShiny = Boolean(dto.isShiny);
        pokemonEntity.isNest = Boolean(dto.isNest);
        pokemonEntity.isNew = Boolean(dto.isNew);
        pokemonEntity.isNotGettable = Boolean(dto.isNotGettable);
        pokemonEntity.isFutureEvolve = Boolean(dto.isFutureEvolve);
        pokemonEntity.cp40 = dto.cp40;
        pokemonEntity.cp39 = dto.cp39;

        
        return pokemonEntity;
    }

}
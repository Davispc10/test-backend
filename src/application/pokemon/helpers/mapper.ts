import { Pokemon } from '../interfaces/pokemon';

export const pokemonMapper = (pokemonList: Pokemon[]) => {
  return pokemonList.map((pokemon: any) => ({
    row: pokemon.Row,
    name: pokemon.Name,
    pokedex_number: pokemon['Pokedex Number'],
    img_name: pokemon['Img name'],
    generation: pokemon.Generation,
    evolution_stage: pokemon['Evolution Stage'],
    evolved: pokemon.Evolved,
    family_id: pokemon.FamilyID,
    cross_gen: pokemon['Cross Gen'],
    type_1: pokemon['Type 1'],
    type_2: pokemon['Type 2'],
    weather_1: pokemon['Weather 1'],
    weather_2: pokemon['Weather 2'],
    stat_total: pokemon['STAT TOTAL'],
    atk: pokemon.ATK,
    def: pokemon.DEF,
    sta: pokemon.STA,
    legendary: pokemon.Legendary,
    aquireable: pokemon.Aquireable,
    spawns: pokemon.Spawns,
    regional: pokemon.Regional,
    raidable: pokemon.Raidable,
    hatchable: pokemon.Hatchable,
    shiny: pokemon.Shiny,
    nest: pokemon.Nest,
    new: pokemon.New,
    not_gettable: pokemon['Not-Gettable'],
    future_evolve: pokemon['Future Evolve'],
    cp_40: pokemon['100% CP @ 40'],
    cp_39: pokemon['100% CP @ 39'],
  }));
};

import { client } from "../../database/client";

export type parsedPokemon = {
    Row: number;
    Name: string;
    'Pokedex Number': number;
    'Img name': string;
    Generation: number;
    'Evolution Stage': string;
    Evolved: number;
    FamilyID: number;
    'Cross Gen': number;
    'Type 1': string;
    'Type 2': string;
    'Weather 1': string;
    'Weather 2': string;
    'STAT TOTAL': number;
    ATK: number;
    DEF: number;
    STA: number;
    Legendary: number;
    Aquireable: number;
    Spawns: number;
    Regional: number;
    Raidable: number;
    Hatchable: number;
    Shiny: number;
    Nest: number;
    New: number;
    'Not-Gettable': number;
    'Future Evolve': number;
    '100% CP @ 40': number;
    '100% CP @ 39': number;
}

export type parsedPokemonArray = {
    data: parsedPokemon[];
}
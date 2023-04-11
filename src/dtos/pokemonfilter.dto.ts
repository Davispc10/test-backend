export interface PokemonFilter {
    name?: string;
    generation?: number;
    type1?: string;
    weather1?: string;
    stat_total?: number;
    legendary?: number;
    is_shiny?: boolean;
    page?: number;
    perPage?: number;
}
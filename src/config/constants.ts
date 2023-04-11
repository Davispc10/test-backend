export class Constants {
    static readonly FILE_PATH: string = '././Pokemon Go.xlsx';
    static readonly SHEET_NAME: string = 'Sheet1';
    static readonly MESSAGE_INT = 'Valor deve ser numérico inteiro.';
    static readonly MESSAGE_BOOL = 'Valor deve ser 0 (falso) ou 1 (verdadeiro).';
    static readonly CUSTOM_HEADER: string[] = [
        'row',
        'name',
        'pokedexNumber',
        'imgName',
        'generation',
        'evolutionStage',
        'isEvolved',
        'familyID',
        'isCrossGen',
        'type1',
        'type2',
        'weather1',
        'weather2',
        'statTotal',
        'atk',
        'def',
        'sta',
        'legendary',
        'aquireable',
        'spawns',
        'isRegional',
        'raidable',
        'hatchable',
        'isShiny',
        'isNest',
        'isNew',
        'isNotGettable',
        'isFutureEvolve',
        'cp40',
        'cp39',
    ];
}
import { PokemonWeatherEnum } from '../../../../domain/entity/pokemon-weather.enum';

export class PokemonWeatherMapper {
  public static map(value: string): PokemonWeatherEnum {
    const myMap = new Map<string, PokemonWeatherEnum>([
      ['Cloudy', PokemonWeatherEnum.CLOUDY],
      ['Fog', PokemonWeatherEnum.FOG],
      ['Partly cloudy', PokemonWeatherEnum.PARTLY_CLOUDY],
      ['Rainy', PokemonWeatherEnum.RAINY],
      ['Snow', PokemonWeatherEnum.SNOW],
      ['Sunny/clear', PokemonWeatherEnum.SUNNY_CLEAR],
      ['Windy', PokemonWeatherEnum.WINDY],
      [undefined, PokemonWeatherEnum.NONE],
    ]);

    return myMap.get(value);
  }
}

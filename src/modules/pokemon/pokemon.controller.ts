import { Req, Query, Controller, Get } from '@nestjs/common';
import {
  FindAllPokemonDto,
  FindAllPokemonResponseDto,
} from './dto/find-all-pokemon.dto';
import { PokemonService } from './pokemon.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  find(
    @Req() req: any,
    @Query() findPokemonDto: FindAllPokemonDto,
  ): Promise<FindAllPokemonResponseDto> {
    return this.pokemonService.find(findPokemonDto);
  }
}

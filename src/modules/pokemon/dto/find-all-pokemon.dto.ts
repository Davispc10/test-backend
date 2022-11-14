import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FindAllPokemonDto {
  @IsOptional()
  @ApiPropertyOptional()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional()
  number?: number;

  @IsOptional()
  @ApiPropertyOptional()
  generation?: string;

  @IsOptional()
  @ApiPropertyOptional()
  evolutionStage?: string;

  @IsOptional()
  @ApiPropertyOptional()
  evolved?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  familyId?: number;

  @IsOptional()
  @ApiPropertyOptional()
  crossGen?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  primaryType?: string;

  @IsOptional()
  @ApiPropertyOptional()
  secondaryType?: string;

  @IsOptional()
  @ApiPropertyOptional()
  primaryWeather?: string;

  @IsOptional()
  @ApiPropertyOptional()
  secondaryWeather?: string;

  @IsOptional()
  @ApiPropertyOptional()
  statTotal?: number;

  @IsOptional()
  @ApiPropertyOptional()
  atk?: number;

  @IsOptional()
  @ApiPropertyOptional()
  def?: number;

  @IsOptional()
  @ApiPropertyOptional()
  sta?: number;

  @IsOptional()
  @ApiPropertyOptional()
  legendary?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  aquireable?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  spawns?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  regional?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  raidable?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  hatchable?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  shiny?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  nest?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  isNew?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  nonGettable?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  futureEvolve?: boolean;

  @IsOptional()
  @ApiPropertyOptional()
  fullCp40?: number;

  @IsOptional()
  @ApiPropertyOptional()
  fullCp39?: number;

  @IsOptional()
  @ApiPropertyOptional({ default: 10 })
  limit?: number;

  @IsOptional()
  @ApiPropertyOptional({ default: 0 })
  page?: number;
}

export class FindAllPokemonResponseDto {
  pokemon: FindAllPokemonDto[];
}

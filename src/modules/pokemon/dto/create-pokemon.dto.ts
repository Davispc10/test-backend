import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  number: number;

  @IsNotEmpty()
  generation: string;

  @IsNotEmpty()
  evolutionStage: string;

  @IsNotEmpty()
  image: number;

  @IsNotEmpty()
  evolved: boolean;

  @IsNotEmpty()
  familyId: number;

  @IsNotEmpty()
  crossGen: boolean;

  @IsString()
  @IsNotEmpty()
  primaryType: string;

  @IsString()
  @IsOptional()
  secondaryType: string;

  @IsNotEmpty()
  primaryWeather: string;

  secondaryWeather: string;

  @IsNotEmpty()
  statTotal: number;

  @IsNotEmpty()
  atk: number;

  @IsNotEmpty()
  def: number;

  @IsNotEmpty()
  sta: number;

  @IsNotEmpty()
  isNew: boolean;

  @IsNotEmpty()
  fullCp40: number;

  @IsNotEmpty()
  fullCp39: number;

  @IsNotEmpty()
  legendary: boolean;

  @IsNotEmpty()
  aquireable: boolean;

  @IsNotEmpty()
  spawns: boolean;

  @IsNotEmpty()
  regional: boolean;

  @IsNotEmpty()
  raidable: boolean;

  @IsNotEmpty()
  hatchable: boolean;

  @IsNotEmpty()
  shiny: boolean;

  @IsNotEmpty()
  nest: boolean;

  @IsNotEmpty()
  nonGettable: boolean;

  @IsNotEmpty()
  futureEvolve: boolean;
}

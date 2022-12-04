import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IPokemon } from '../../../domain/models/IPokemon';
import { JoinColumn } from 'typeorm';
import { Information } from './Information';
import { TypeWeather } from './TypeWeather';
import { FightingAttributes } from './FightingAttributes';
import { AdditionalInformation } from './AdditionalInformation';

@Entity('Pokemon')
export class Pokemon implements IPokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Information, (information) => information.pokedexNumber)
  @JoinColumn()
  information: Information

  @OneToOne(() => TypeWeather, (type_weather) => type_weather.pokedexNumber)
  @JoinColumn()
  type_weather: TypeWeather

  @OneToOne(() => FightingAttributes, (fighting_attributes) => fighting_attributes.pokedexNumber)
  @JoinColumn()
  fighting_attributes: FightingAttributes

  @OneToOne(() => AdditionalInformation, (additional_information) => additional_information.pokedexNumber)
  @JoinColumn()
  additional_information: AdditionalInformation












}

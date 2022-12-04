import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IPokemon } from '../../../domain/models/IPokemon';

@Entity('Pokemon')
export class Pokemon implements IPokemon{
  @Column()
  name: string;

  @PrimaryColumn()
  pokedexNumber: number;

  @Column({ nullable: true })
  imgName: string;

  @Column()
  generation: number;

  @Column({ nullable: true })
  evolutionStage: string;

  @Column()
  evolved: number;

  @Column({ nullable: true })
  familyId: number;

  @Column()
  crossGen: number;

  @Column()
  type1: string;

  @Column({ nullable: true })
  type2: string;

  @Column()
  weather1: string;

  @Column({ nullable: true })
  weather2: string;

  @Column()
  statTotal: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  sta: number;

  @Column()
  legendary: number;

  @Column()
  acquirable: number;

  @Column()
  spawns: number;

  @Column()
  regional: number;

  @Column()
  raidable: number;

  @Column()
  hatchable: number;

  @Column()
  shiny: number;

  @Column()
  nest: number;

  @Column()
  new: number;

  @Column()
  notGettable: number;

  @Column()
  futureEvolve: number;

  @Column()
  cp100e40: number;

  @Column()
  cp100e39: number;
}

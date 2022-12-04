import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity('AdditionalInformation')
export class AdditionalInformation {
  @PrimaryColumn()
  pokedexNumber: number;

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
}

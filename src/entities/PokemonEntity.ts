import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PokemonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  pokedexNumber: string;

  @Column({ nullable: true })
  imgName: string;

  @Column({ nullable: true })
  generation: string;

  @Column({ nullable: true })
  evolutionStage: string;

  @Column({ nullable: true })
  evolved: string;

  @Column({ nullable: true })
  familyId: string;

  @Column({ nullable: true })
  crossGen: string;

  @Column({ nullable: true })
  type1: string;

  @Column({ nullable: true })
  type2: string;

  @Column({ nullable: true })
  Weather1: string;

  @Column({ nullable: true })
  Weather2: string;

  @Column({ nullable: true })
  statTotal: string;

  @Column({ nullable: true })
  atk: string;

  @Column({ nullable: true })
  def: string;

  @Column({ nullable: true })
  sta: string;

  @Column({ nullable: true })
  legendary: string;

  @Column({ nullable: true })
  aquireable: string;

  @Column({ nullable: true })
  spawns: string;

  @Column({ nullable: true })
  regional: string;

  @Column({ nullable: true })
  raidable: string;

  @Column({ nullable: true })
  hatchable: string;

  @Column({ nullable: true })
  shiny: string;

  @Column({ nullable: true })
  nest: string;

  @Column({ nullable: true })
  new: string;

  @Column({ nullable: true })
  notGettable: string;

  @Column({ nullable: true })
  futureEvolve: string;

  @Column({ nullable: true })
  oneHundredPercent40: string;

  @Column({ nullable: true })
  oneHundredPercent39: string;
}

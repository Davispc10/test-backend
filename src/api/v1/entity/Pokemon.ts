import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemon")
class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pokedex_number: number;

  @Column()
  img_name: string;

  @Column()
  generation: number;

  @Column()
  evolution_stage: string;

  @Column()
  evolved: string;

  @Column()
  familyId: number;

  @Column()
  cross_Gen: boolean;

  @Column()
  type_one: string;

  @Column()
  type_two: string;

  @Column()
  weather_one: string;

  @Column()
  weather_two: string;

  @Column()
  stat_total: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  sta: number;

  @Column()
  legendary: number;

  @Column()
  aquireable: number;

  @Column()
  spawns: boolean;

  @Column()
  regional: number;

  @Column()
  raidable: number;

  @Column()
  hatchable: number;

  @Column()
  shiny: boolean;

  @Column()
  nest: boolean;

  @Column()
  new: boolean;

  @Column()
  not_gettable: boolean;

  @Column()
  future_evolve: boolean;

  @Column()
  cp40: number;

  @Column()
  cp39: number;
}

export default Pokemon;

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'pokemon' })
export class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', nullable: false, default: '' })
  name: string;

  @Column({ name: 'number', nullable: true, default: null })
  number: number;

  @Column({ name: 'image', nullable: true, default: '' })
  image: string;

  @Column({ name: 'generation', nullable: false, default: '' })
  generation: string;

  @Column({ name: 'evolution_stage', nullable: false, default: '' })
  evolutionStage: string;

  @Column({ name: 'has_evolved', nullable: false, default: false })
  evolved: boolean;

  @Column({ name: 'family_id', nullable: true, default: '' })
  familyId: string;

  @Column({ name: 'cross_gen', nullable: false, default: false })
  crossGen: boolean;

  @Column({ name: 'primary_type', nullable: false, default: '' })
  primaryType: string;

  @Column({ name: 'secondary_type', nullable: true, default: '' })
  secondaryType: string;

  @Column({ name: 'primary_weather', nullable: false, default: '' })
  primaryWeather: string;

  @Column({ name: 'secondary_weather', nullable: false, default: '' })
  secondaryWeather: string;

  @Column({ name: 'stat_total', nullable: false, default: 0 })
  statTotal: number;

  @Column({ name: 'atk', nullable: false, default: 0 })
  atk: number;

  @Column({ name: 'def', nullable: false, default: 0 })
  def: number;

  @Column({ name: 'sta', nullable: false, default: 0 })
  sta: number;

  @Column({ name: 'is_legendary', nullable: false, default: false })
  legendary: boolean;

  @Column({ name: 'is_aquireable', nullable: false, default: true })
  aquireable: boolean;

  @Column({ name: 'spawns', nullable: false, default: true })
  spawns: boolean;

  @Column({ name: 'is_regional', nullable: false, default: false })
  regional: boolean;

  @Column({ name: 'is_raidable', nullable: false, default: true })
  raidable: boolean;

  @Column({ name: 'is_hatchable', nullable: false, default: true })
  hatchable: boolean;

  @Column({ name: 'has_shiny', nullable: false, default: false })
  shiny: boolean;

  @Column({ name: 'has_nest', nullable: false, default: true })
  nest: boolean;

  @Column({ name: 'is_new', nullable: false, default: false })
  isNew: boolean;

  @Column({ name: 'is_non_gettable', nullable: false, default: false })
  nonGettable: boolean;

  @Column({ name: 'future_evolve', nullable: false, default: false })
  futureEvolve: boolean;

  @Column({ name: 'full_cp_40', nullable: false, default: 0 })
  fullCp40: number;

  @Column({ name: 'full_cp_39', nullable: false, default: 0 })
  fullCp39: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  constructor(pokemon?: Partial<Pokemon>) {
    this.name = pokemon?.name;
    this.number = pokemon?.number;
    this.generation = pokemon?.generation;
    this.image = pokemon?.image;
    this.legendary = pokemon?.legendary;
    this.evolved = pokemon?.evolved;
    this.familyId = pokemon?.familyId;
    this.evolutionStage = pokemon?.evolutionStage;
    this.crossGen = pokemon?.crossGen;
    this.primaryType = pokemon?.primaryType;
    this.secondaryType = pokemon?.secondaryType;
    this.primaryWeather = pokemon?.primaryWeather;
    this.secondaryWeather = pokemon?.secondaryWeather;
    this.statTotal = pokemon?.statTotal;
    this.atk = pokemon?.atk;
    this.def = pokemon?.def;
    this.sta = pokemon?.sta;
    this.aquireable = pokemon?.aquireable;
    this.futureEvolve = pokemon?.futureEvolve;
    this.hatchable = pokemon?.hatchable;
    this.nest = pokemon?.nest;
    this.nonGettable = pokemon?.nonGettable;
    this.shiny = pokemon?.shiny;
    this.isNew = pokemon?.isNew;
    this.spawns = pokemon?.spawns;
    this.fullCp39 = pokemon?.fullCp39;
    this.fullCp40 = pokemon?.fullCp40;
  }
}

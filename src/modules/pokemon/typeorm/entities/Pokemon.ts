import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Pokemon')
export class Pokemon {
  @Column()
  name: string

  @PrimaryColumn()
  pokedexNumber: number

  @Column({ nullable: true })
  imgName: string

  @Column()
  generation: number

  @Column({ nullable: true })
  evolutionStage: number

  @Column()
  evolved: boolean

  @Column({ nullable: true })
  familyId: number

  @Column()
  crossGen: boolean

  @Column()
  type1: string

  @Column({ nullable: true })
  type2: string

  @Column()
  weather1: string

  @Column({ nullable: true })
  weather2: string

  @Column()
  statTotal: number

  @Column()
  atk: number

  @Column()
  def: number

  @Column()
  sta: number

  @Column()
  legendary: number

  @Column()
  acquirable: number

  @Column()
  spawns: boolean

  @Column()
  regional: boolean

  @Column()
  raidable: number

  @Column()
  hatchable: number

  @Column()
  shiny: boolean

  @Column()
  nest: boolean

  @Column()
  new: boolean

  @Column()
  notGettable: boolean

  @Column()
  futureEvolve: boolean

  @Column()
  cp100e40: number

  @Column()
  cp100e39: number
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pokemons')
export class PgPokemon {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column()
  pokedexNumber!: number

  @Column()
  imgName!: string

  @Column()
  generation!: number

  @Column({ nullable: true })
  evolutionStage?: string

  @Column()
  evolved!: boolean

  @Column({ nullable: true })
  familyID?: number

  @Column()
  crossGen!: boolean

  @Column()
  type1!: string

  @Column({ nullable: true })
  type2?: string

  @Column()
  weather1!: string

  @Column({ nullable: true })
  weather2?: string

  @Column()
  statTotal!: number

  @Column()
  atk!: number

  @Column()
  def!: number

  @Column()
  sta!: number

  @Column()
  legendary!: boolean

  @Column()
  aquireable!: number

  @Column()
  spawns!: boolean

  @Column()
  regional!: boolean

  @Column()
  raidable!: boolean

  @Column()
  hatchable!: boolean

  @Column()
  shiny!: boolean

  @Column()
  nest!: boolean

  @Column()
  new!: boolean

  @Column()
  notGettable!: boolean

  @Column()
  futureEvolve!: boolean

  @Column()
  cp40!: number

  @Column()
  cp39!: number
}
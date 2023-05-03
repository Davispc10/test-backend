import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from 'typeorm'

@Entity('pokemon')
class Pokemon {
  @PrimaryGeneratedColumn("uuid")
  id?: string

  @Column({ name: 'name', nullable: false } )
  name?: string
  
  @Column({ name: 'pokedex_id', nullable: true})
  pokedexId?: number
  
  @Column({ name: 'image_name', nullable: true})
  imageName?: string
  
  @Column({ name: 'generation', nullable: true})
  generation?: number
  
  @Column({ name: 'evolution_stage', nullable: true})
  evolutionStage?: string

  @Column({ name: 'evolved', nullable: true})
  evolved?: number

  @Column({ name: 'family_id', nullable: true})
  familyID?: number
  
  @Column({ name: 'cross_gen', nullable: true})
  crossGen?: boolean
  
  @Column({ name: 'type_1', nullable: true})
  type1?: string
  
  @Column({ name: 'type_2', nullable: true})
  type2?: string
  
  @Column({ name: 'weather_1', nullable: true})
  weather1?: string
  
  @Column({ name: 'weather_2', nullable: true})
  weather2?: string

  @Column({ name: 'stat_total', nullable: true})
  statTotal?: number
  
  @Column({ name: 'atk', nullable: true})
  atk?: number
  
  @Column({ name: 'def', nullable: true})
  def?: number
  
  @Column({ name: 'sta', nullable: true})
  sta?: number

  @Column({ name: 'legendary', nullable: true})
  legendary?: boolean

  @Column({ name: 'aquireable', nullable: true})
  aquireable?: number

  @Column({ name: 'spawns', nullable: true})
  spawns?: number

  @Column({ name: 'regional', nullable: true})
  regional?: number

  @Column({ name: 'raidable', nullable: true})
  raidable?: number

  @Column({ name: 'hatchable', nullable: true})
  hatchable?: number

  @Column({ name: 'shiny', nullable: true})
  shiny?: number

  @Column({ name: 'nest', nullable: true})
  nest?: number

  @Column({ name: 'new', nullable: true})
  isNew?: boolean

  @Column({ name: 'not_gettable', nullable: true})
  notGettable?: boolean

  @Column({ name: 'future_evolve', nullable: true})
  futureEvolve?: boolean

  @Column({ name: 'cp_40', nullable: true})
  cp40?: number

  @Column({ name: 'cp_39', nullable: true})
  cp39?: number
}

export { Pokemon }

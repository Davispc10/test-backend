import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from 'typeorm'

@Entity('pokemon')
class Pokemon {
  @PrimaryColumn()
  id?: number

  @Column({ name: 'name', nullable: false })
  name?: string
  
  @Column({ name: 'pokedex_id' })
  pokedexId?: number
  
  @Column({ name: 'image_name' })
  imageName?: string
  
  @Column({ name: 'generation' })
  generation?: number
  
  @Column({ name: 'evolution_stage' })
  evolutionStage?: number

  @Column({ name: 'evolved' })
  evolved?: boolean

  @Column({ name: 'family_id' })
  familyID?: number
  
  @Column({ name: 'cross_gen' })
  crossGen?: boolean
  
  @Column({ name: 'type_1' })
  type1?: string
  
  @Column({ name: 'type_2' })
  type2?: string
  
  @Column({ name: 'weather_1' })
  weather1?: string
  
  @Column({ name: 'weather_2' })
  weather2?: string

  @Column({ name: 'stat_total' })
  statTotal?: number
  
  @Column({ name: 'atk' })
  atk?: number
  
  @Column({ name: 'def' })
  def?: number
  
  @Column({ name: 'sta' })
  sta?: number

  @Column({ name: 'legendary' })
  legendary?: boolean

  @Column({ name: 'aquireable' })
  aquireable?: number

  @Column({ name: 'spawns' })
  spawns?: number

  @Column({ name: 'regional' })
  regional?: number

  @Column({ name: 'raidable' })
  raidable?: number

  @Column({ name: 'hatchable' })
  hatchable?: number

  @Column({ name: 'shiny' })
  shiny?: number

  @Column({ name: 'nest' })
  nest?: number

  @Column({ name: 'new' })
  new?: boolean

  @Column({ name: 'not_gettable' })
  notGettable?: boolean

  @Column({ name: 'future_evolve' })
  futureEvolve?: boolean

  @Column({ name: 'cp_40' })
  cp40?: number

  @Column({ name: 'cp_39' } )
  cp39?: number
}

export { Pokemon }

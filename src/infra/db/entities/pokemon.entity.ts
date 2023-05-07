import { PgPokedex,PgPokemonFamily,PgPokemonType,PgPokemonWeather } from '@/infra/db/entities'
import { type PokemonEntity } from '@/domain/entities'

import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'pokemon' })
export class PgPokemon implements PokemonEntity {
  @PrimaryColumn()
    id: number

  @Column()
    name: string

  @Column({ name: 'img_name' })
    imgName: string

  @Column()
    generation: number

  @Column({ name: 'evolution_stage' })
    evolutionStage: string

  @Column()
    evolved: boolean

  @Column({ name: 'cross_gen' })
    crossGen: boolean

  @Column()
    atk: number

  @Column()
    def: number

  @Column()
    sta: number

  @Column()
    legendary: boolean

  @Column()
    aquireable: boolean

  @Column()
    spaws: boolean

  @Column()
    regional: boolean

  @Column()
    raidable: boolean

  @Column()
    hatchable: boolean

  @Column()
    shiny: boolean

  @Column()
    nest: boolean

  @Column({ name: 'not_gettable' })
    notGettable: boolean

  @Column({ name: 'future_evolve' })
    futureEvolve: boolean

  @Column({ name: 'cp_40' })
    cp40: number

  @Column({ name: 'cp_39' })
    cp39: number

  @ManyToOne(() => PgPokedex, pokedex => pokedex.id, { eager: true })
    pokedex: PgPokedex

  @ManyToMany(() => PgPokemonType, pokemonType => pokemonType.id, { eager: true })
  @JoinTable()
    types: PgPokemonType[]

  @ManyToMany(() => PgPokemonWeather, pokemonWeather => pokemonWeather.id, { eager: true })
  @JoinTable()
    weathers: PgPokemonWeather[]

  @ManyToOne(() => PgPokemonFamily, pokemonFamily => pokemonFamily.id, { eager: true })
    family: PgPokemonFamily

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}

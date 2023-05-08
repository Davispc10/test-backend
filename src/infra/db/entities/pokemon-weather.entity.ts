import { PgPokemon } from '@/infra/db/entities'
import { type PokemonWeatherEntity } from '@/domain/entities'

import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'pokemon_weather' })
export class PgPokemonWeather implements PokemonWeatherEntity {
  @PrimaryColumn()
    id: number

  @Column()
    name: string

  @ManyToMany(() => PgPokemon, pokemon => pokemon.weathers)
    pokemons: PgPokemon[]

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}

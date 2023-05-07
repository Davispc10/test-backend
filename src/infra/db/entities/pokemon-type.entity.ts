import { type PokemonTypeEntity } from '@/domain/entities'

import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { PgPokemon } from './pokemon.entity'

@Entity({ name: 'pokemon_type' })
export class PgPokemonType implements PokemonTypeEntity {
  @PrimaryColumn()
    id: number

  @Column()
    name: string

  @ManyToMany(() => PgPokemon, pokemon => pokemon.types)
    pokemons: PgPokemon[]

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}

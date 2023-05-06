import { type PokemonFamilyEntity } from '@/domain/entities'

import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'pokemon_family' })
export class PgPokemonFamily implements PokemonFamilyEntity {
  @PrimaryColumn()
    id: number

  @Column()
    name: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}

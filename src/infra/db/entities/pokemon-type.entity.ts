import { type PokemonTypeEntity } from '@/domain/entities'

import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'pokemon_type' })
export class PgPokemonType implements PokemonTypeEntity {
  @PrimaryColumn()
    id: number

  @Column()
    name: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}

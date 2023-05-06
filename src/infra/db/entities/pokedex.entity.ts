import { type PokedexEntity } from '@/domain/entities'

import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'pokedex' })
export class PgPokedex implements PokedexEntity {
  @PrimaryColumn()
    id: number

  @Column()
    name: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}

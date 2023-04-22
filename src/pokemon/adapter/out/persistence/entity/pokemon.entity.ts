import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PokemonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  pokedexId: number;

  @Column()
  generation: number;

  @Column()
  evolutionStage: number;

  @Column()
  evolved: boolean;

  @Column({ nullable: true })
  familyId: number;

  @Column()
  type1: number;

  @Column()
  type2: number;

  @Column()
  weather1: number;

  @Column()
  weather2: number;

  @Column()
  statTotal: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  sta: number;
}

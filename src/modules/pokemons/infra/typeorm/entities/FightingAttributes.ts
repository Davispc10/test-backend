import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity('FightingAttributes')
export class FightingAttributes {
  @PrimaryColumn()
  pokedexNumber: number;

  @Column()
  statTotal: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  sta: number;

  @Column()
  cp100e40: number;

  @Column()
  cp100e39: number;
}

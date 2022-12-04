import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity('TypeWeather')
export class TypeWeather {
  @PrimaryColumn()
  pokedexNumber: number;

  @Column()
  type1: string;

  @Column({ nullable: true })
  type2: string;

  @Column()
  weather1: string;

  @Column({ nullable: true })
  weather2: string;
}

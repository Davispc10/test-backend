import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Information')
export class Information {
  @PrimaryColumn()
  pokedexNumber: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  imgName: string;

  @Column()
  generation: number;

  @Column({ nullable: true })
  evolutionStage: string;

  @Column()
  evolved: number;

  @Column({ nullable: true })
  familyId: number;

  @Column()
  crossGen: number;
}

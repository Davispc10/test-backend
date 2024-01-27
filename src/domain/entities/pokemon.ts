import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pokemons')
export class Pokemon {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'row', nullable:true })
    row: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'pokedex_number' })
    pokedexNumber: number;

    @Column({ name: 'img_name', nullable: true })
    imgName: string;

    @Column({ name: 'generation' })
    generation: number;

    @Column({ name: 'evolution_stage', nullable: true })
    evolutionStage: string;

    @Column({ name: 'evolved', nullable: true })
    evolved: boolean;

    @Column({ name: 'family_id', nullable: true })
    familyId: number;

    @Column({ name: 'cross_gen' })
    crossGen: number;

    @Column({ name: 'type1' })
    type1: string;

    @Column({ name: 'weather1' })
    weather1: string;

    @Column({ name: 'stat_total' })
    statTotal: number;

    @Column({ name: 'atk' })
    atk: number;

    @Column({ name: 'def' })
    def: number;

    @Column({ name: 'sta' })
    sta: number;

    @Column({ name: 'legendary' })
    legendary: number;

    @Column({ name: 'aquireable' })
    aquireable: number;

    @Column({ name: 'spawns' })
    spawns: number;

    @Column({ name: 'regional' })
    regional: boolean;

    @Column({ name: 'raidable' })
    raidable: number;

    @Column({ name: 'hatchable' })
    hatchable: number;

    @Column({ name: 'shiny' })
    shiny: boolean;

    @Column({ name: 'nest' })
    nest: boolean;

    @Column({ name: 'is_new' })
    isNew: boolean;

    @Column({ name: 'not_gettable' })
    notGettable: boolean;

    @Column({ name: 'future_evolve' })
    futureEvolve: boolean;

    @Column({ name: 'cp100_at_40' })
    cp100At40: number;

    @Column({ name: 'cp100_at_39' })
    cp100At39: number;
}

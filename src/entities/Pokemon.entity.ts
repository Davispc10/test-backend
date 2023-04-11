import { IsBoolean, IsInt, IsOptional, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Constants } from "../config/constants";

@Entity('pokemons')
export class Pokemon {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    @IsInt({message: Constants.MESSAGE_INT})
    row: number;

    @Column()
    @MaxLength(100, {message: 'Tamanho máximo de preenchimento do campo é de 100 caracteres'})
    name: string;

    @Column({ name: 'pokedex_number' })
    @IsOptional()
    @IsInt({message: Constants.MESSAGE_INT})
    pokedexNumber: number;

    @Column({ name: 'img_name' })
    @MaxLength(100, {message: 'Tamanho máximo de preenchimento do campo é de 100 caracteres'})
    imgName: string;

    @Column()
    @IsInt({message: Constants.MESSAGE_INT})
    generation: number;

    @Column({ name: 'evolution_stage' })
    @IsOptional()
    @IsInt({message: Constants.MESSAGE_INT})
    evolutionStage: number;

    @Column({ name: 'is_evolved' })
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    isEvolved: boolean;

    @Column({ name: 'family_id' })
    @IsOptional()
    @IsInt({message: Constants.MESSAGE_INT})
    familyID: number;

    @Column({ name: 'is_cross_gen' })
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    isCrossGen: boolean;

    @Column({ name: 'type1' })
    @MaxLength(50, {message: 'Tamanho máximo de preenchimento do campo é de 50 caracteres'})
    type1: string;

    @Column({ name: 'type2' })
    @IsOptional()
    @MaxLength(50, {message: 'Tamanho máximo de preenchimento do campo é de 50 caracteres'})
    type2: string;

    @Column({ name: 'weather1' })
    @MaxLength(50, {message: 'Tamanho máximo de preenchimento do campo é de 50 caracteres'})
    weather1: string;

    @Column({ name: 'weather2' })
    @IsOptional()
    @MaxLength(50, {message: 'Tamanho máximo de preenchimento do campo é de 50 caracteres'})
    weather2: string;

    @Column({ name: 'stat_total' })
    @IsInt({message: Constants.MESSAGE_INT})
    statTotal: number;

    @Column()
    @IsInt({message: Constants.MESSAGE_INT})
    atk: number;

    @Column()
    @IsInt({message: Constants.MESSAGE_INT})
    def: number;

    @Column()
    @IsInt({message: Constants.MESSAGE_INT})
    sta: number;

    @Column()
    @IsInt({message: Constants.MESSAGE_INT})
    legendary: number;

    @Column()
    @IsInt({message: Constants.MESSAGE_INT})
    aquireable: number;

    @Column()
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    spawns: boolean;

    @Column({ name: 'is_regional' })
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    isRegional: boolean;

    @Column()
    @IsInt({message: Constants.MESSAGE_INT})
    raidable: number;

    @Column()
    @IsInt({message: Constants.MESSAGE_INT})
    hatchable: number;

    @Column({ name: 'is_shiny' })
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    isShiny: boolean;

    @Column({ name: 'is_nest' })
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    isNest: boolean;

    @Column({ name: 'is_new' })
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    isNew: boolean;

    @Column({ name: 'is_not_gettable' })
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    isNotGettable: boolean;

    @Column({ name: 'is_future_evolve' })
    @IsBoolean({message: Constants.MESSAGE_BOOL})
    isFutureEvolve: boolean;

    @Column({ name: 'cp_40' })
    @IsInt({message: Constants.MESSAGE_INT})
    cp40: number;

    @Column({ name: 'cp_39' })
    @IsInt({message: Constants.MESSAGE_INT})
    cp39: number;
}

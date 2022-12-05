import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IUser } from '../../../domain/models/IUser';

@Entity('User')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  saltedHash: string;
}

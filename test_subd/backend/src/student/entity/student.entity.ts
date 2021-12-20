import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  secondname: string;

  @Column()
  birthday: Date;

  @Column()
  university: string;

  @Column()
  faculty: string;

  @Column()
  applyDate: Date;
}
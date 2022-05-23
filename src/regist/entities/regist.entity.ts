import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class regist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_course: string;

  @Column()
  Name_course: string;

  @Column()
  credit: string;

  @Column()
  section: string;

  @Column()
  class_date: string;

  @Column()
  lecturer: string;

  @Column()
  term: string;
}

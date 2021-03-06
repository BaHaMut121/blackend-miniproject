import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class course {
  @PrimaryGeneratedColumn()
  course_id: number;

  @Column()
  coursetext_id: string;

  @Column()
  course_Name: string;

  @Column()
  credit: string;

  @Column()
  section: string;

  @Column()
  class_date: string;

  @Column()
  lecturer: string;

  @Column()
  year: string;
}

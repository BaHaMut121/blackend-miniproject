import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class registration {
  @PrimaryGeneratedColumn()
  regist_id: number;

  @Column()
  subject_id: string;

  @Column()
  subject: string;

  @Column()
  Grade: string;

  @Column()
  regis_sec: string;

  @Column()
  regis_date: string;

  @Column()
  regist_lecturer: string;

  @Column()
  semesterm: string;
}

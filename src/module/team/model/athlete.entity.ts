import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'athlete' })
export class Athlete {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;
}

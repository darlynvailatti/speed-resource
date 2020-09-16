import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'team' })
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;
}

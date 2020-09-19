import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test-template' })
export class TestTemplateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'json' })
  graph: string;
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TestExecutionEntity } from './test-execution.entity';
import { TestTemplateEntity } from './test-template.entity';

export enum TestState {
  IDLE = 'IDLE',
  READY = 'READY',
  STARTED = 'STARTED',
  DONE = 'DONE',
  CANCELLED = 'CANCELLED',
}
@Entity({ name: 'test' })
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({
    type: 'enum',
    enum: TestState,
    default: TestState.IDLE,
  })
  state: TestState;

  @ManyToOne(type => TestTemplateEntity, { eager: true })
  @JoinColumn()
  template: TestTemplateEntity;

  @OneToMany(
    type => TestExecutionEntity,
    execution => execution.test,
  )
  executions: TestExecutionEntity[];
}

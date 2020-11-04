import { type } from 'os';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TestExecutionTurnEntity } from './test-execution-turn.entity';
import { TestEntity } from './test.entity';

@Entity({ name: 'test-execution' })
export class TestExecutionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => TestEntity,
    test => test.executions,
  )
  test: TestEntity;

  @Column({ type: 'timestamp' })
  date: Date;

  @OneToMany(
    type => TestExecutionTurnEntity,
    executionTurn => executionTurn.execution,
  )
  turns: TestExecutionTurnEntity[];
}

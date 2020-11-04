import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TestExecutionEdgeEntity } from './test-execution-edge.entity';
import { TestExecutionEntity } from './test-execution.entity';
import { type } from 'os';

@Entity({ name: 'test-execution-turn' })
export class TestExecutionTurnEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => TestExecutionEntity,
    execution => execution.turns,
  )
  execution: TestExecutionEntity;

  @Column()
  number: number;

  @Column({ type: 'int' })
  startTimeStamp: number;

  @Column({ type: 'int' })
  endTimeStamp: number;

  @OneToMany(
    type => TestExecutionEdgeEntity,
    edge => edge.turn,
  )
  edges: TestExecutionEdgeEntity[];
}
